import React, { Component } from 'react';
import AdBanner from './AdBanner/AdBanner';
import Filter from './Filter/Filter';
import Card from './Card/Card';
import PageHandler from './PageHandler/PageHandler';
import Option from './Option/Option';
import './Main.scss';
import './AdBanner/AdBanner.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      get: [],
      isButtonSelect: Array(PAGENUM.length).fill(false).fill(true, 0, 1),
      isCategorySelect: Array(TITLES.length).fill(false).fill(true, 0, 1),
      num: 1,
      categoryNum: 1,
      query: 1,
    };
  }
  loadData = () => {
    fetch(`http://10.58.5.188:8000/products?page=1`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          get: data.RESULT,
        });
      });
  };

  //동적 라우팅 사용
  handleClick = (index, e) => {
    let query = e.target.dataset.idx;
    let newArr = Array(PAGENUM.length).fill(false);
    newArr[index] = true;
    this.setState({
      isButtonSelect: newArr,
      query: query,
    });
  };

  arrowHandler = number => {
    let nextNumber = Number(this.state.query) + number;
    if (nextNumber === 9) {
      nextNumber = 8;
    } else if (nextNumber === 0) {
      nextNumber = 1;
    }
    let newArr = Array(PAGENUM.length).fill(false);
    newArr[nextNumber] = true;

    this.setState({
      isButtonSelect: newArr,
      query: nextNumber,
    });
  };

  categoryClick = idx => {
    const newArr = Array(TITLES.length).fill(false);
    newArr[idx] = true;
    this.setState(
      {
        isCategorySelect: newArr,
        categoryNum: idx,
      },
      () => {
        fetch(
          `http://10.58.5.188:8000/products?category=${
            this.state.categoryNum + 2
          }`,
          {
            method: 'GET',
          }
        )
          .then(res => res.json())
          .then(data => {
            this.setState({
              get: data.RESULT,
            });
          });
      }
    );
  };

  getData = () => {
    fetch(`http://10.58.5.188:8000/products?page=${this.state.query}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          get: data.RESULT,
        });
      });
  };

  componentDidMount = prevState => {
    this.loadData();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.getData();
    }
  }
  render() {
    const { get, isButtonSelect, num, isCategorySelect } = this.state;
    return (
      <div>
        <AdBanner />
        <Filter
          handleClick={this.categoryClick}
          isCategorySelect={isCategorySelect}
        />
        <Option data={get} />
        <ul className="cards">
          {get.map((data, index) => (
            <Card
              key={index}
              img={data.image}
              sub={data.description}
              title={data.title}
              price={data.price}
              category={data.category}
              isNew={data.isnew}
              store={data.store}
            />
          ))}
        </ul>
        <ul className="pagehandle">
          <li
            className="lfArrow"
            onClick={e => {
              this.arrowHandler(-1);
            }}
          >
            <i class="fas fa-chevron-left"></i>
          </li>
          {PAGENUM.map((elm, index) => (
            <PageHandler
              dataidx={elm.num}
              key={index}
              index={index}
              elm={elm.num}
              selectedIndex={this.state.query}
              isSelected={Number(this.state.query) === index + 1}
              handleClick={this.handleClick}
              elementIndex={index}
            />
          ))}
          <li
            className="rtArrow"
            onClick={e => {
              this.arrowHandler(1);
            }}
          >
            <i class="fas fa-chevron-right"></i>
          </li>
        </ul>
      </div>
    );
  }
}
const PAGENUM = [
  { num: '1' },
  { num: '2' },
  { num: '3' },
  { num: '4' },
  { num: '5' },
  { num: '6' },
  { num: '7' },
  { num: '8' },
];
const TITLES = [
  { content: '전체', icon: <i class="fas fa-utensils"></i> },
  { content: '건강반찬', icon: <i class="fab fa-aws"></i> },
  { content: '밥/국국', icon: <i class="fas fa-balance-scale"></i> },
  { content: '샐러드', icon: <i class="fab fa-apple"></i> },
  { content: '죽/스프', icon: <i class="fab fa-angrycreative"></i> },
  { content: '소스/양념', icon: <i class="fas fa-mortar-pestle"></i> },
  { content: '베이커리', icon: <i class="fas fa-cheese"></i> },
  { content: '건강음료', icon: <i class="fas fa-cocktail"></i> },
  { content: '간편식/간식', icon: <i class="fas fa-cookie-bite"></i> },
  { content: '연화식', icon: <i class="fas fa-tooth"></i> },
  { content: '1Table', icon: <i class="fas fa-wine-bottle"></i> },
  { content: '비건/라이프', icon: <i class="fas fa-seedling"></i> },
  { content: '스페셜 패키지', icon: <i class="fas fa-concierge-bell"></i> },
  { content: '산지직송', icon: <i class="fas fa-mountain"></i> },
];
export default Main;

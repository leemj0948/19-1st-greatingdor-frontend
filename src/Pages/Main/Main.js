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
      num: 1,
    };
  }
  //http://10.58.6.0:8000/products?page=1&category=5   카테고리는 5,8,9
  //http://localhost:3000/data/cardList.json 목데이터 주소
  // loadData = () => {
  //   fetch(`http://10.58.2.110:8000/products?page=3`, {
  //     method: 'GET',
  //     // headers: {
  //     //   Authorization: localStorage.getItem('token'),
  //     // },
  //     // body: JSON.stringify({
  //     //   image_url:
  //     //     'https://images.unsplash.com/photo-1462524500090-89443873e2b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGZsb3dlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
  //     //   content: '화려한 이미지.',
  //     // }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       this.setState({
  //         // get: data,
  //         // sub: data.description,
  //         // title: data.title,
  //         // price: data.price,
  //         // category: data.category,
  //         // isNew: data.isNew,
  //         get: data.RESULT,
  //         // get: data,
  //         // get: data.RESULT[0].image[0].fields.image_url,
  //         // sub: data.RESULT[0].description,
  //         // title: data.RESULT[0].title,
  //         // price: data.RESULT[0].price,
  //         // category: data.RESULT[0].category,
  //       });

  //       // .then((res) => {
  //       //   console.log(res);
  //       //   localStorage.setItem('token', res.TOKEN);
  //       // });
  //     });
  // };

  handleClick = index => {
    const newArr = Array(PAGENUM.length).fill(false);
    newArr[index] = true;
    this.setState({
      isButtonSelect: newArr,
      num: index,
    });
    fetch(`http://10.58.2.110:8000/products?page=${this.state.num}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          get: data.RESULT,
        });
      });
  };

  clcikLeft = index => {
    console.log('왼쪽', this.state.num);
    const newArr = Array(PAGENUM.length).fill(false);
    this.setState(
      {
        isButtonSelect: newArr,
        num: this.state.num - 1,
      },
      () => {
        console.log('왼쪽 눌렸을때', this.state.num);
      }
    );
    fetch(`http://10.58.2.110:8000/products?page=${this.state.num}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          get: data.RESULT,
        });
      });
    newArr[this.state.num] = true;
  };
  clickRight = e => {
    console.log('오른쪽', this.state.num);
    const newArr = Array(PAGENUM.length).fill(false);
    this.setState(
      {
        isButtonSelect: newArr,
        num: this.state.num + 1,
      },
      () => {
        console.log('오른쪽눌렸을때', this.state.num);
      }
    );
    fetch(`http://10.58.2.110:8000/products?page=${this.state.num}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          get: data.RESULT,
        });
      });
    newArr[this.state.num] = true;
  };
  componentDidMount = () => {
    this.loadData && this.loadData();
  };
  render() {
    const { get, isButtonSelect, num } = this.state;
    return (
      <div>
        <AdBanner />
        <Filter />
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
          <li className="lfArrow" onClick={this.clcikLeft}>
            <i class="fas fa-chevron-left"></i>
          </li>
          {PAGENUM.map((elm, index) => (
            <PageHandler
              key={index}
              elm={elm.num}
              isSelected={isButtonSelect[index]}
              handleClick={this.handleClick}
              elementIndex={index}
            />
          ))}
          <li className="rtArrow" onClick={this.clickRight}>
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
export default Main;

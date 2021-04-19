import React, { Component } from 'react';
import Category from './Category';
import './Filter.scss';

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      hover: '',
      fontColor: '',
      num: 1,
    };
  }

  componentDidUpdate(prevState) {
    if (this.state.num !== this.state.num) {
      this.fetchData(this.state.num);
    }
  }
  render() {
    const { isCategorySelect, handleClick } = this.props;
    return (
      <div>
        <div className="marketList">
          <h1 className="title">건강마켓</h1>
          <section className="category">
            <ul className="categoryButton">
              {TITLES.map((elm, index) => {
                return (
                  <Category
                    key={index}
                    icon={elm.icon}
                    content={elm.content}
                    isSelected={isCategorySelect[index]}
                    handleClick={handleClick}
                    elementIndex={index}
                  />
                );
              })}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}
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
export default Filter;

import React, { Component } from 'react';
import Button from './Button/Button';
import './SearchDropDown.scss';

class SearchDropDown extends Component {
  state = {
    searchItemList: [],
  };
  componentDidMount = () => {
    fetch('/data/SearchItems.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ searchItemList: data.RESULT });
      });
  };

  onClickHandler = () => {
    this.props.handleDropDown();
  };

  render() {
    const { searchItemList } = this.state;

    return (
      <div className="search_dropdown">
        <div className="search_input">
          <div className="first_container">
            <span>상품검색</span>
            <button onClick={this.onClickHandler}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="second_container">
            <input type="text" placeholder="검색어를 입력해 주세요." />
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="search_items">
          <ul className="menu">
            {searchItemList &&
              searchItemList.map((item, idx) => {
                return (
                  <li key={idx}>
                    <div className="title">{item.title}</div>
                    <div className="items_container">
                      {item.category.map((category, idx) => {
                        return <Button category={category} key={idx} />;
                      })}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="search_btns">
          <button className="clear_btn">초기화</button>
          <button className="search_btn">선택완료</button>
        </div>
      </div>
    );
  }
}

export default SearchDropDown;

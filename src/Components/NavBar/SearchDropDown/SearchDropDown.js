import React, { Component } from 'react';
import Button from './Button/Button';
import './SearchDropDown.scss';

class SearchDropDown extends Component {
  state = {
    searchInput: '',
    searchItemList: [],
  };

  // 상품 카테고리 목록 받아오기
  componentDidMount = () => {
    fetch('/data/SearchItems.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ searchItemList: data.RESULT });
      });
  };

  // 검색창 드롭다운 Toggling
  onClickHandler = () => {
    this.props.handleDropDown();
  };

  // 인풋값 받기
  handleInputContent = e => {
    this.setState({ searchInput: e.target.value });
  };

  // 검색
  handleItemSearch = () => {
    const { searchInput } = this.state;
    fetch(`http://10.58.6.28:8000/products/search?search=${searchInput}`)
      .then(response => response.json())
      // 검색된 페이지로 이동
      .then(data => console.log(data));
  };

  // 엔터 => 검색
  submitWithEnter = e => {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.handleItemSearch();
    }
  };

  // 클릭 => 검색
  submitWithClick = () => {
    this.handleItemSearch();
  };

  // 드롭다운 선택 아이템 초기화
  clearSelectedBtn = () => {};

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
            <form action="" onSubmit={this.submitWithEnter}>
              <input
                type="text"
                placeholder="검색어를 입력해 주세요."
                onChange={this.handleInputContent}
              />
              <button onClick={this.submitWithClick}>
                <i className="fas fa-search"></i>
              </button>
            </form>
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
          <button className="clear_btn" onClick={this.clearSelectedBtn}>
            초기화
          </button>
          <button className="search_btn">선택완료</button>
        </div>
      </div>
    );
  }
}

export default SearchDropDown;

import React, { Component } from 'react';
import Button from './Button/Button';
import './SearchDropDown.scss';

class SearchDropDown extends Component {
  state = {
    isClicked: false,
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
  // handleItemSearch = () => {
  //   const { searchInput } = this.state;
  //   fetch(`http://10.58.1.202:8000/products?search=${searchInput}&page=2`)
  //     .then(response => response.json())
  //     // 검색된 페이지로 이동
  //     .then(data => console.log(data));
  // };

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

  // 검색창 드롭다운 아이템 선택
  handleItemClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  // 검색창 드롭다운 아이템 선택 초기화
  clearSelectedBtn = () => {
    this.setState({ isClicked: false });
  };

  render() {
    const { isClicked, searchItemList } = this.state;

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
              searchItemList.map((item, idx1) => {
                return (
                  <li key={idx}>
                    <div className="title">{item.title}</div>
                    <div className="items_container">
                      {item.category.map((category, idx2) => {
                        return (
                          <Button
                            isClicked={isClicked}
                            handleItemClick={this.handleItemClick}
                            category={category}
                            key={idx}
                          />
                        );
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

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
        console.log(data);
        const newArr = data.RESULT.map(el => {
          return {
            ...el,
            category: el.category.map(el2 => {
              return { name: el2, isSelected: false };
            }),
          };
        });
        console.log(newArr);
        this.setState({ searchItemList: newArr });
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
  handleItemClick = (num1, num2) => {
    console.log(num1, num2);
    const { searchItemList } = this.state;
    const newData = searchItemList.map((item, idx) => {
      return num1 !== idx
        ? item
        : {
            ...item,
            category: item.category.map((item2, idx2) => {
              return num2 !== idx2
                ? item2
                : { ...item2, isSelected: !item2.isSelected };
            }),
          };
    });

    this.setState({ searchItemList: newData });
  };

  // 검색창 드롭다운 아이템 선택 초기화
  clearSelectedBtn = () => {
    this.setState({ isSelected: false });
  };
  goToResultPage = () => {};

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
                  <li key={idx1}>
                    <div className="title">{item.title}</div>
                    <div className="items_container">
                      {item.category.map((category, idx2) => {
                        return (
                          <Button
                            isClicked={category.isSelected}
                            handleItemClick={this.handleItemClick}
                            category={category.name}
                            key={idx2}
                            number1={idx1}
                            number2={idx2}
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
          <button className="search_btn" onClick={this.goToResultPage}>
            선택완료
          </button>
        </div>
      </div>
    );
  }
}

export default SearchDropDown;

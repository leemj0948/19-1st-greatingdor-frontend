import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryDropDown from './CategoryDropDown/CategoryDropDown';
import SearchDropDown from './SearchDropDown/SearchDropDown';
import './NavBar.scss';

class NavBar extends Component {
  state = {
    navSearchInput: '',
    isClicked: false,
    categoryDropdown: false,
    searchDropdown: false,
  };

  handleInputContent = e => {
    this.setState({ navSearchInput: e.target.value });
  };

  handleCategoryDropDown = () => {
    this.setState({ categoryDropdown: !this.state.categoryDropdown });
  };

  handleSearchDropdown = () => {
    this.setState({ searchDropdown: !this.state.searchDropdown });
  };

  render() {
    const CATEGORY_LIST = [
      '케어식단',
      '건강마켓',
      '기획전',
      '이벤트',
      '스토리',
    ];

    const {
      navSearchInput,
      isClicked,
      categoryDropdown,
      searchDropdown,
    } = this.state;

    return (
      <nav id="navbar">
        <div className="navbar_inner_container">
          <div className="navbar_user_area">
            <span>
              <Link to="#"> 로그인 </Link>
            </span>
            <span>
              <Link to="#">회원가입</Link>
            </span>
            <span>
              <Link to="#">쿠폰등록 </Link>
            </span>
            <span>
              <Link to="#">
                고객센터
                <button className="customer_center_Btn">
                  <i className="fas fa-caret-down"></i>
                </button>
              </Link>
            </span>
          </div>
          <div className="navbar_logo">
            <img src="/img/img_header_logo_Greating.png" alt="main logo" />
          </div>
          <ul className="navbar_categories">
            {/* dropdown 1 - category부문*/}
            <div className="navbar_category_list">
              <button
                className="navbar_category_burger"
                onClick={this.handleCategoryDropDown}
              >
                <i className="fas fa-bars"></i>
                <li>
                  <a>카테고리</a>
                </li>
              </button>
              {categoryDropdown && (
                <CategoryDropDown
                  isClicked={isClicked}
                  handleDropDown={this.handleCategoryDropDown}
                />
              )}
            </div>
            {CATEGORY_LIST.map((ele, idx) => {
              return (
                <li key={idx}>
                  <Link to="#">{ele}</Link>
                </li>
              );
            })}
            <div className="navbar_search_form">
              <input
                className="navbar_search_input"
                onChange={this.handleInputContent}
              />
              {/* dropdown 2 - search부문*/}
              <button
                className="search_btn"
                //검색 버튼 onclick시 input값이 있으면 바로 검색창으로 넘어가고 => 이부분 어떻게 처리?
                //빈 값이면 드롭다운 열리게 처리
                onClick={!navSearchInput && this.handleSearchDropdown}
              >
                <i className="fas fa-search"></i>
              </button>
              <button className="cart_btn">
                <i className="fas fa-cart-arrow-down"></i>
              </button>
            </div>
            {searchDropdown && (
              <SearchDropDown handleDropDown={this.handleSearchDropdown} />
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

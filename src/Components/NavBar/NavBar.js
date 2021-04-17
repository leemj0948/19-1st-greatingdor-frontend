import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryDropDown from './CategoryDropDown/CategoryDropDown';
import SearchDropDown from './SearchDropDown/SearchDropDown';
import './NavBar.scss';

class NavBar extends Component {
  state = {
    isClicked: false,
    CategoryDropdown: false,
    CustomerDropdown: false,
    SearchDropdown: false,
  };

  handleCategoryDropDown = () => {
    this.setState({ CategoryDropdown: !this.state.CategoryDropdown });
  };

  handleCustomerDropDown = () => {
    this.setState({ CustomerDropdown: !this.state.CustomerDropdown });
  };

  handleSearchDropdown = () => {
    this.setState({ SearchDropdown: !this.state.SearchDropdown });
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
      isClicked,
      CategoryDropdown,
      CustomerDropdown,
      SearchDropdown,
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
            <span onClick={this.handleCustomerDropDown}>
              <Link to="#">
                고객센터
                <button className="customer_center_Btn">
                  <i className="fas fa-caret-down"></i>
                </button>
              </Link>
            </span>
            {CustomerDropdown && <CustomerDropdown />}
          </div>
          <div className="navbar_logo">
            <img src="/img/img_header_logo_Greating.png"></img>
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
              {CategoryDropdown && (
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
              <input className="navbar_search_input" />
              {/* dropdown 2 - search부문*/}
              <button
                className="search_btn"
                onClick={this.handleSearchDropdown}
              >
                <i className="fas fa-search"></i>
              </button>

              <button className="cart_btn">
                <i className="fas fa-cart-arrow-down"></i>
              </button>
            </div>
          </ul>
          {SearchDropdown && (
            <SearchDropDown handleDropDown={this.handleSearchDropdown} />
          )}
        </div>
      </nav>
    );
  }
}

export default NavBar;

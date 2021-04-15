import { doc } from 'prettier';
import React, { Component } from 'react';
import DropDown from './DropDown/DropDown';
import './NavBar.scss';

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      // barIcon: false,
      dropdown: false,
    };
  }

  // handleIconClick = () => {
  //   console.log(this.state.barIcon);

  //   this.setState({ barIcon: !this.state.barIcon });
  // };

  handleDropDown = () => {
    this.setState({ dropdown: !this.state.dropdown });
  };

  render() {
    const CATEGORY_LIST = [
      '케어식단',
      '건강마켓',
      '기획전',
      '이벤트',
      '스토리',
    ];
    const { dropdown } = this.state;

    return (
      <nav id="navbar">
        <div className="navbar_inner_container">
          <div className="navbar_user_area">
            <span>
              <a href="#"> 로그인 </a>
            </span>
            <span>
              <a href="#">회원가입</a>
            </span>
            <span>
              <a href="#">쿠폰등록 </a>
            </span>
            <span>
              <a href="#">
                고객센터
                <button className="customer_center_Btn">
                  <i className="fas fa-caret-down"></i>
                </button>
              </a>
            </span>
          </div>
          <div className="navbar_logo">
            <img src="/img/img_header_logo_Greating.png"></img>
          </div>
          <ul className="navbar_categories">
            <div className="navbar_category_list">
              <button
                className="navbar_category_burger"
                onClick={this.handleDropDown}
              >
                <i className="fas fa-bars"></i>
                <li>
                  <a>카테고리</a>
                </li>
              </button>
              {dropdown && <DropDown />}
            </div>

            {CATEGORY_LIST.map((ele, idx) => {
              return (
                <li key={idx}>
                  <a href="#">{ele}</a>
                </li>
              );
            })}
            <form className="navbar_search_form">
              <input className="navbar_search_input"></input>
              <button className="searchBtn">
                <i className="fas fa-search"></i>
              </button>
              <button className="cartBtn">
                <i className="fas fa-cart-arrow-down"></i>
              </button>
            </form>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

import React, { Component } from 'react';
import './Option.scss';

class Option extends Component {
  constructor() {
    super();
    this.state = {
      isClick: false,
    };
  }
  clicked = () => {
    this.setState({
      isClick: !this.state.isClick,
    });
  };
  render() {
    return (
      <div className="option">
        <span className="cardNum">전체상품 {this.props.data.length}</span>
        <ul className="optional">
          <li className="checkCard" onClick={this.clicked}>
            {this.state.isClick ? (
              <span>
                <i class="fas fa-check-circle" style={{ color: '#918c00' }}></i>
              </span>
            ) : (
              <span>
                <i class="far fa-check-circle"></i>
              </span>
            )}

            <span className="checkBox">품절 상품 제외</span>
          </li>
          <li className="checkList">
            <select name="rank">
              <option value="MD">MD 추천순</option>
              <option value="popular">인기순</option>
              <option value="update">최신순</option>
              <option value="lowPrice">낮은가격순</option>
            </select>
          </li>
          <li className="checkListBtn">
            <i class="fas fa-filter"></i>필터
          </li>
        </ul>
      </div>
    );
  }
}

export default Option;

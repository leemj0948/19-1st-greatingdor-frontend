import React, { Component } from 'react';
import DropDown from '../ReviewTab/DropDown/DropDown';
import './InquiryTab.scss';

class InquiryTab extends Component {
  state = {
    inquiryId: 0,
    inquiryData: [],
  };

  componentDidMount = () => {
    fetch('/data/inquiryTab.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ inquiryData: data });
      });
  };

  handleDropdown = id => {
    if (this.state.inquiryId === id) {
      this.setState({ inquiryId: 0 });
    } else {
      this.setState({ inquiryId: id });
    }
  };

  render() {
    const { inquiryData, inquiryId } = this.state;
    return (
      <div className="inquiry_tab">
        <div className="inquiry_header">
          <span className="total"> 전체(130)</span>
          <select className="filter">
            <option>분류전체</option>
            <option>상품</option>
            <option>배송</option>
            <option>반품/취소</option>
            <option>교환</option>
            <option>기타</option>
          </select>
        </div>
        <ul className="inquiry_container">
          {inquiryData.map((inquiry, idx) => {
            return (
              <li key={idx}>
                <div className="inquiry_contents">
                  <div className="contents">
                    <div className="title_container">
                      <span className="title">{inquiry.title}</span>
                    </div>
                    <div className="right">
                      <span className="user_id">{inquiry.userId} |</span>
                      <span className="date">{inquiry.date}</span>
                      <span
                        className="icon"
                        onClick={() => this.handleDropdown(idx + 1)}
                      >
                        <i className="fas fa-chevron-down"></i>
                      </span>
                    </div>
                  </div>
                  {inquiryId === idx + 1 && <DropDown item={inquiry} />}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default InquiryTab;

import React, { Component } from 'react';
import InformatonTab from './InformationTab/InformationTab';
import ReviewTab from './ReviewTab/ReviewTab';
import InquiryTab from './InquiryTab/InquiryTab';
import ExchangeRefundTab from './ExchangeRefundTab/ExchangeRefundTab';
import './ProductDescription.scss';

class ProductDescription extends Component {
  state = {
    currentId: 1,
  };

  clickHandler = id => {
    this.setState({ currentId: id });
  };

  render() {
    return (
      <div className="tab_container">
        <ul className="tabs">
          {CATEGORY_ARR.map((category, idx) => {
            return (
              <li
                key={idx}
                onClick={() => this.clickHandler(idx + 1)}
                className={this.state.currentId === idx + 1 ? 'clicked' : ''}
              >
                {category}
              </li>
            );
          })}
        </ul>
        <div className="contents">{TAB_OBJ[this.state.currentId]}</div>
      </div>
    );
  }
}

export default ProductDescription;

const TAB_OBJ = {
  1: <InformatonTab />,
  2: <ReviewTab />,
  3: <InquiryTab />,
  4: <ExchangeRefundTab />,
};

const CATEGORY_ARR = ['상품정보', '상품후기', '상품문의', '교환/반품'];

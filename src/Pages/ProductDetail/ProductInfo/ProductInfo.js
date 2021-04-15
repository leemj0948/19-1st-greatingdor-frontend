import React, { Component } from 'react';

class ProductInfo extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="product_info">
        <div className="product_info_header">
          <span>{item.top_desc}</span>
          <span className="icons">
            <button>
              <i className="far fa-heart"></i>
            </button>
            <button>
              <i className="fas fa-share-alt"></i>
            </button>
          </span>
        </div>
        <div className="product_info_name">{item.name}</div>
        <div className="product_info_icons">
          {item.icons.map(icon => {
            return <span>{icon}</span>;
          })}
        </div>
        <div className="product_amount">
          <span>{Object.keys(item.amount)[0]}</span>
          <span>{item.amount[Object.keys(item.amount)[0]]}</span>
        </div>
        <div className="product_calorie">
          <span>{Object.keys(item.calorie)[0]}</span>
          <span>{item.calorie[Object.keys(item.calorie)[0]]}</span>
        </div>
        <div className="product_origin">{item.origin}</div>
        <div className="product_price">{item.price}</div>
        <div className="product_delivery">
          <span className="delivery">{Object.keys(item.delivery)[0]}</span>
          <span>{item.delivery[Object.keys(item.delivery)[0]]}</span>
        </div>
        <div className="button_list">
          <button className="store_cart">장바구니 담기</button>
          <button className="buy">구매하기</button>
          <button className="present">선물하기</button>
        </div>
      </div>
    );
  }
}

export default ProductInfo;

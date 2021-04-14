import React, { Component } from 'react';
import ProductDescription from './ProductDescription/ProductDescription';
import '@fortawesome/fontawesome-free/js/all.js';
import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor() {
    super();

    this.state = {
      imgNum: 1,
    };
  }

  componentDidMount = () => {
    setInterval(this.goToRight, 3000);
  };

  goToLeft = () => {
    this.setState({
      imgNum:
        this.state.imgNum <= 3 && this.state.imgNum > 1
          ? this.state.imgNum - 1
          : 3,
    });
  };

  goToRight = () => {
    this.setState({
      imgNum: this.state.imgNum >= 3 ? 1 : this.state.imgNum + 1,
    });
  };

  render() {
    const { imgNum } = this.state;
    return (
      <main className="product_detail">
        <div className="location">
          <span>HOME > 건강마켓 > 베이커리 > 버터/치즈</span>
        </div>
        <div className="product">
          <div className="image_slider">
            <img src={`/data/images/${imgNum}.jpg`} width="550px" />
            <button className="left-arrow" onClick={this.goToLeft}>
              <i class="fas fa-arrow-left"></i>
            </button>
            <button className="right-arrow" onClick={this.goToRight}>
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className="product_info">
            <div className="product_info_header">
              <span>덴마크에서 온 100년 전통치즈</span>
              <span className="icons">
                <button>
                  <i class="far fa-heart"></i>
                </button>
                <button>
                  <i class="fas fa-share-alt"></i>
                </button>
              </span>
            </div>
            <div className="product_info_name">[ALA] 알라 크림치즈 2종</div>
            <div className="product_info_icons">
              <span>발효영양</span>
              <span>콩류</span>
            </div>
            <div className="product_amount">
              <span>용량</span>
              <span>150g</span>
            </div>
            <div className="product_calorie">
              <span>칼로리</span>
              <span>375kcal</span>
            </div>
            <div className="product_origin">원산지(덴마크)</div>
            <div className="product_price">3,060원</div>
            <div className="product_delivery">
              <span className="delivery">택배배송</span>
              <span>5pm 이전 결제시 4월 15일(목) 도착 가능</span>
            </div>
            <div className="button_list">
              <button className="store_cart">장바구니 담기</button>
              <button className="buy">구매하기</button>
              <button className="present">선물하기</button>
            </div>
          </div>
        </div>
        <ProductDescription />
      </main>
    );
  }
}

export default ProductDetail;

import React, { Component } from 'react';
import NavBar from '../../Components/NavBar/NavBar';

export class ProductDetail extends Component {
  render() {
    return (
      <div>
        {/* top banner */}
        <div className="top_banner">
          <a href="#">지금 그리팅 가입하고 최대 10만원 쿠폰팩 받으세요 > </a>
        </div>
        {/* navbar */}
        <NavBar />

        {/* product detail */}
        <main className="product_detail">
          <div className="location">
            <span>HOME > 건강마켓 > 베이커리 > 버터/치즈</span>
          </div>
          <div className="image_slider">
            <img
              src="https://image.greating.co.kr/IL/item/202012/28/B_1D030F351EFD44988D37FC79BBB28C02.jpg"
              width="550px"
              height="550px"
            ></img>
          </div>
        </main>
      </div>
    );
  }
}

export default ProductDetail;

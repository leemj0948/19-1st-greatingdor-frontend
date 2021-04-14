import React, { Component } from 'react';

export class ProductDetail extends Component {
  render() {
    return (
      <div>
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

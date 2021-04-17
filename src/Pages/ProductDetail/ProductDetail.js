import React, { Component } from 'react';

import Location from './Location/Location';
import ImageSlider from './ProductInfo/ImageSlider/ImageSlider';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductDescription from './ProductDescription/ProductDescription';

import '@fortawesome/fontawesome-free/js/all.js';
import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor() {
    super();

    this.state = {
      imgNum: 1,
      productInfo: [],
    };
  }

  componentDidMount = () => {
    setInterval(this.goToRight, 3000);

    fetch('/data/productData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ productInfo: data.RESULT });
        console.log(data.RESULT);
      });
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
    const { imgNum, productInfo } = this.state;
    console.log(productInfo);
    return (
      <main className="product_detail">
        {/* {productInfo.map((item, idx) => { */}
        {/* return (
        <> */}
        <Location item={productInfo} />
        <div className="product">
          <ImageSlider
            item={productInfo}
            imgNum={imgNum}
            goToLeft={this.goToLeft}
            goToRight={this.goToRight}
          />
          <ProductInfo item={productInfo} />
        </div>
        {/* </>
        ); ? })} */}
        <ProductDescription />
      </main>
    );
  }
}

export default ProductDetail;

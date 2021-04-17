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
      productInfo: [],
    };
  }

  componentDidMount = () => {
    // 실제 fetch시에는 productId={item.id}와 같이  queryString의 형태로 클릭한 제품의 id를 보내는 것!
    fetch('/data/productData.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ productInfo: data.RESULT });
      });
  };

  render() {
    const { productInfo } = this.state;
    return (
      <main className="product_detail">
        <Location item={productInfo} />
        <div className="product">
          <ImageSlider item={productInfo} />
          <ProductInfo item={productInfo} />
        </div>
        <ProductDescription />
      </main>
    );
  }
}

export default ProductDetail;

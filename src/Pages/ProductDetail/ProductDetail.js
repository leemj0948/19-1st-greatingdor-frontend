import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import Location from './Location/Location';
import ImageSlider from './ProductInfo/ImageSlider/ImageSlider';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductDescription from '../ProductDetail/ProductDescription/ProductDescription';

import './ProductDetail.scss';

export class ProductDetail extends Component {
  state = {
    productItem: [],
  };
  componentDidMount = () => {
    fetch('/data/productData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ productItem: data.RESULT });
      });
  };
  render() {
    return (
      <div className="product_detail">
        <div className="location">
          <Location item={this.state.productItem} />
        </div>
        <div className="product">
          <div className="image_slider">
            <ImageSlider item={this.state.productItem} />
          </div>
          <ProductInfo item={this.state.productItem} />
        </div>
        <ProductDescription item={this.state.productItem} />
        <Footer />
      </div>
    );
  }
}

export default ProductDetail;

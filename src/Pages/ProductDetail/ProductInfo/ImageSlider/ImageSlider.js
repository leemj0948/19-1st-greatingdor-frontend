import React, { Component } from 'react';

class ImageSlider extends Component {
  render() {
    const { item, goToLeft, goToRight } = this.props;
    return (
      <div className="image_slider">
        <img src={item.img_url} width="550px" />
        <button className="left-arrow" onClick={goToLeft}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="right-arrow" onClick={goToRight}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    );
  }
}

export default ImageSlider;

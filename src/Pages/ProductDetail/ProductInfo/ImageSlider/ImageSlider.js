import React, { Component } from 'react';

class ImageSlider extends Component {
  render() {
    const { imgNum, item, goToLeft, goToRight } = this.props;
    return (
      <div className="image_slider">
        <img src={`/images/${imgNum}.jpg`} width="550px" />
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

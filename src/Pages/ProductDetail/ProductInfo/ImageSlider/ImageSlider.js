import React, { Component } from 'react';
import './ImageSlider.scss';

class ImageSlider extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="image_slider">
        {item.images &&
          item.images.map((image, idx) => {
            return <img src={image} key={idx} />;
          })}
      </div>
    );
  }
}

export default ImageSlider;

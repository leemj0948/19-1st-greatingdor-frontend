import React, { Component } from 'react';

class AdBanner extends Component {
  constructor() {
    super();
    this.state = {
      img: 1,
      display: 'none',
    };
  }

  imgChangeLeft = () => {
    if (this.state.img > 3) {
      this.setState({
        img: 1,
      });
    } else {
      this.setState({
        img: this.state.img + 1,
      });
    }
  };

  imgChangeRight = () => {
    if (this.state.img <= 1) {
      this.setState({
        img: 4,
      });
    } else {
      this.setState({
        img: this.state.img - 1,
      });
    }
  };

  buttonDisplayOn = () => {
    this.setState({
      display: 'block',
    });
  };

  buttonDisplayOff = () => {
    this.setState({
      display: 'none',
    });
  };

  componentDidMount() {
    setInterval(this.imgChangeLeft, 5000);
  }

  render() {
    return (
      <>
        <div
          className="mainBanner"
          onPointerOver={this.buttonDisplayOn}
          onPointerOut={this.buttonDisplayOff}
        >
          <button
            className="leftArrow"
            onClick={this.imgChangeLeft}
            style={{ display: this.state.display }}
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <img src={`/data/img/${this.state.img}.jpg`} alt="배너이미지" />
          <button
            className="rightArrow"
            onClick={this.imgChangeRight}
            style={{ display: this.state.display }}
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </>
    );
  }
}

export default AdBanner;

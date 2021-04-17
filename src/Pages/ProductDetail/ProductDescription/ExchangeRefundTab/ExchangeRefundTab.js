import React, { Component } from 'react';

class ExchangeRefundTab extends Component {
  state = {
    imageData: [],
  };
  // componentDidMount = () => {
  //   fetch("")
  //     .then(response => response.json())
  //     .then(data => this.setState({ imageData: data.RESULT }));
  // };
  render() {
    const { imageData } = this.state;
    console.log(imageData);
    return (
      <div>
        <img src={imageData}></img>
      </div>
    );
  }
}

export default ExchangeRefundTab;

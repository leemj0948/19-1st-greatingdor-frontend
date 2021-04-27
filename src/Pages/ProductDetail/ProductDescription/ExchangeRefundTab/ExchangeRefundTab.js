import React, { Component } from 'react';

class ExchangeRefundTab extends Component {
  state = {
    imageData: [],
  };
  componentDidMount = () => {
    fetch(`http://3.36.96.154:8000/products/${this.props.item.id}`)
      .then(response => response.json())
      .then(data => this.setState({ imageData: data.RESULT }));
  };
  render() {
    return (
      <div>
        <img src={this.state.imageData.content} />
      </div>
    );
  }
}

export default ExchangeRefundTab;

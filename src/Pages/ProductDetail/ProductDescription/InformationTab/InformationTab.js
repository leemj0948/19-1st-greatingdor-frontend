import React, { Component } from 'react';

class Information extends Component {
  state = {
    imageData: [],
  };
  componentDidMount = () => {
    fetch('http://10.58.2.110:8000/details/under/1')
      .then(response => response.json())
      .then(data => this.setState({ imageData: data.RESULT }));
  };
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

export default Information;

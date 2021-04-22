import React, { Component } from 'react';
import './InformationTab.scss';

class InformationTab extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    imageData: [],
  };
  componentDidMount = () => {
    fetch(`http://10.58.7.140:8000/products/${this.props.item.id}`)
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

export default InformationTab;

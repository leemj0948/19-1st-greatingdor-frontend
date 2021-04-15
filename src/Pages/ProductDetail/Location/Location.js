import React, { Component } from 'react';

class Location extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="location">
        <span>{item.status}</span>
      </div>
    );
  }
}

export default Location;

import React, { Component } from 'react';

class Location extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="location">
        <span>
          HOME > {item.menu_name} > {item.category_name}
        </span>
      </div>
    );
  }
}

export default Location;

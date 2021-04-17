import React, { Component } from 'react';
import './DropDown.scss';

class DropDown extends Component {
  render() {
    const { item } = this.props;

    return (
      <div className="dropdown">
        <div className="option">{item.option}</div>
        <p className="contents">{item.contents}</p>
      </div>
    );
  }
}

export default DropDown;

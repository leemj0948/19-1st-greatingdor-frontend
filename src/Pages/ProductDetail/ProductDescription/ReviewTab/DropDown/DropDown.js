import React, { Component } from 'react';
import './DropDown.scss';

class DropDown extends Component {
  render() {
    const { item } = this.props;

    return (
      <div className="dropdown">
        <div className="option">{item.option_name}</div>
        <p className="contents">{item.content}</p>
      </div>
    );
  }
}

export default DropDown;

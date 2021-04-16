import React, { Component } from 'react';
import './DropDown.scss';

class DropDown extends Component {
  render() {
    const { review } = this.props;

    return (
      <div className="review_dropdown">
        <div className="option">{review.option}</div>
        <p className="contents">{review.contents}</p>
      </div>
    );
  }
}

export default DropDown;

import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  onClickHandler = () => {
    this.props.handleItemClick();
  };
  render() {
    const { isClicked, category, idx } = this.props;
    return (
      <button
        onClick={this.onClickHandler}
        className={isClicked ? 'button_items selected' : 'button_items'}
        key={idx}
      >
        {category}
      </button>
    );
  }
}

export default Button;

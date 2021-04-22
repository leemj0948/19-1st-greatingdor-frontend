import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    const { isClicked, category, number1, number2 } = this.props;
    return (
      <button
        onClick={() => this.props.handleItemClick(number1, number2)}
        className={isClicked ? 'button_items selected' : 'button_items'}
      >
        {category}
      </button>
    );
  }
}

export default Button;

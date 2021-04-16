import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  state = {
    isClicked: false,
  };

  handleItemClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    const { category, idx } = this.props;
    const { isClicked } = this.state;
    return (
      <button
        onClick={this.handleItemClick}
        className={isClicked ? 'button_items selected' : 'button_items'}
        key={idx}
      >
        {category}
      </button>
    );
  }
}

export default Button;

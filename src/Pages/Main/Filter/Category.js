import React, { Component } from 'react';
import './Category.scss';

class Category extends Component {
  render() {
    const { icon, content, isSelected, handleClick, elementIndex } = this.props;
    return (
      <li
        className={`buttonList ${isSelected ? 'true' : 'false'}`}
        onClick={() => handleClick(elementIndex)}
      >
        <span className="icons">{icon}</span>
        {content}
      </li>
    );
  }
}

export default Category;

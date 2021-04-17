import React, { Component } from 'react';
import './Category.scss';

class Category extends Component {
  // state = { isClicked: false };

  // onClick = () => {
  //   this.setState({ isClicked: !this.state.isClicked });
  // };

  render() {
    // const { isClicked } = this.state;
    const { icon, content, isSelected, handleClick, elementIndex } = this.props;
    return (
      <li
        className={`buttonList ${isSelected ? 'true' : 'false'}`}
        onClick={() => handleClick(elementIndex)}
      >
        <a>
          <span className="icons">{icon}</span>
          {content}
        </a>
      </li>
    );
  }
}

export default Category;

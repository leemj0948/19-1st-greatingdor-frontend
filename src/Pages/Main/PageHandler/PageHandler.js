import React, { Component } from 'react';
import './PageHandler.scss';

class PageHandler extends Component {
  // constructor() {
  //   super();
  //   this.state = { isSelected: false };
  // }
  // changeColor = e => {
  //   this.setState({ isSelected: false });
  //   console.log(e);
  //   if (e.nativeEvent.target) {
  //     this.setState({ isSelected: !this.state.isSelected });
  //   }
  // };

  render() {
    const { elm, isSelected, handleClick, elementIndex } = this.props;
    return (
      <>
        <li
          className={`pageNum ${isSelected ? 'selected' : ''}`}
          onClick={() => handleClick(elementIndex)}
        >
          {elm}
        </li>
      </>
    );
  }
}

export default PageHandler;

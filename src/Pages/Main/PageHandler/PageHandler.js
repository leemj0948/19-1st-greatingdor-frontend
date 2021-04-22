import React, { Component } from 'react';
import './PageHandler.scss';

class PageHandler extends Component {
  render() {
    const {
      elm,
      isSelected,
      handleClick,
      elementIndex,
      num,
      dataidx,
      index,
      query,
    } = this.props;
    return (
      <li
        className={`pageNum ${isSelected ? 'selected' : ''}`}
        onClick={e => handleClick(elementIndex, e)}
        data-idx={dataidx}
      >
        {elm}
      </li>
    );
  }
}

export default PageHandler;

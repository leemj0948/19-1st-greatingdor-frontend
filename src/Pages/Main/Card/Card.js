import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
  render() {
    const { img, sub, title, price, category, isNew, store } = this.props;
    return (
      <li className="img">
        <div className="imgFrame">
          <img src={img} alt="제품이미지 " />
          {isNew && <span className="new">{isNew}New</span>}
          {store === '냉장' ? (
            <span className="fresh">{store}</span>
          ) : store === '냉동' ? (
            <span className="frozen">{store}</span>
          ) : null}
        </div>

        <li className="sub">{sub}</li>
        <li className="title">{title}</li>
        <li className="price">{parseInt(price).toLocaleString('ko-KR')}원</li>
        <li className="category">{category}</li>
      </li>
    );
  }
}

export default Card;

import React, { Component } from 'react';
import './CartModal.scss';

class CartModal extends Component {
  onClickHandler = () => {
    //
  };
  render() {
    const { cartData } = this.props;
    return (
      <div className="cart_modal" onClick={this.onClickHandler}>
        {cartData.map((cart, idx) => {
          return (
            <div className="mordal_container" key={idx}>
              <div className="wrapper">
                <div className="contents_container">
                  <span>{cart.title}</span>
                  <div className="right">
                    <span className="amount">수량</span>
                    <span className="cal_amount">
                      <button className="minus_btn">-</button>
                      <input className="amount_status" value="0" />
                      <button className="plus_btn">+</button>
                    </span>
                    <span className="price">{cart.price}</span>
                  </div>
                </div>
              </div>
              <div className="total_price">총 금액 5,400원 </div>

              <div className="buttons_container">
                <button className="interested">관심상품</button>
                <button className="put_cart">장바구니 담기</button>
                <button className="buy_directly">바로구매</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CartModal;

import React, { Component } from 'react';
import './CartModal.scss';

class CartModal extends Component {
  onClickHandler = () => {
    //바깥 누르면 모달창 닫히게?
  };
  render() {
    return (
      <div className="cart_modal" onClick={this.onClickHandler}>
        <div className="mordal_container">
          <div className="wrapper">
            <div className="contents_container">
              <span>MAL 알라 크림치즈</span>
              <div className="right">
                <span className="amount">수량</span>
                <span className="cal_amount">
                  <button className="minus_btn">-</button>
                  <input className="amount_status" value="0" />
                  <button className="plus_btn">+</button>
                </span>
                <span className="price">5,400원</span>
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
      </div>
    );
  }
}

export default CartModal;

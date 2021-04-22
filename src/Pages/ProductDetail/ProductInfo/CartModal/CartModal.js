import React, { Component } from 'react';
import './CartModal.scss';

class CartModal extends Component {
  // 모달창 수량 삭감
  substractAmount = (val, idx) => {
    val = Number(val);
    if (val === 0) {
      return;
    }
    this.props.changeCount(val - 1, idx);
  };

  // 모달창 수량 증가
  addAmount = (val, idx) => {
    val = Number(val);
    this.props.changeCount(val + 1, idx);
  };

  // goToCart = () => {
  //   if (this.state.amountCount === 0) {
  //     alert('제품의 수량을 입력해주세요. ');
  //   } else {
  //     // 장바구니, 구매하기 페이지로 이동하기
  //   }
  // };

  onClickHandler = () => {
    this.props.onOffCartModal();
  };
  render() {
    const { cartData } = this.props;
    return (
      <div className="cart_modal">
        <div className="modal_container">
          <div className="btn_container">
            <button className="close_btn" onClick={this.onClickHandler}>
              옵션 닫기
            </button>
          </div>
          <div className="wrapper">
            {cartData.map((cartItem, idx) => {
              return (
                <div className="contents_container" key={idx}>
                  <span className="item_name">{cartItem.option_name}</span>
                  <div className="right">
                    <span className="amount">수량</span>
                    <span className="cal_amount">
                      <button
                        className="minus_btn"
                        onClick={() =>
                          this.substractAmount(
                            cartItem.count,
                            cartItem.option_id
                          )
                        }
                      >
                        -
                      </button>
                      <input
                        className="amount_status"
                        value={cartItem.count}
                        onChange={this.handleAmountInput}
                      />
                      <button
                        className="plus_btn"
                        onClick={() =>
                          this.addAmount(cartItem.count, cartItem.option_id)
                        }
                      >
                        +
                      </button>
                    </span>
                    <span className="price">
                      {cartItem.option_price.toLocaleString()} 원
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="total_price">
            {/* 모든 옵션의 가격*수량 더한 금액으로 구현 */}총 금액: {}원
          </div>

          <div className="buttons_container">
            <button className="interested">
              <i class="far fa-heart"></i> 관심상품
            </button>
            <button className="put_cart" onClick={this.goToCart}>
              장바구니 담기
            </button>
            <button className="buy_directly" onClick={this.goToCart}>
              바로구매
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartModal;

import React, { Component } from 'react';
import './CartModal.scss';

class CartModal extends Component {
  state = {
    amountCount: 1,
  };

  handleAmountInput = e => {
    this.setState({ amountCount: Number(e.target.value) });
  };

  substractAmount = () => {
    if (this.state.amountCount === 0) {
      return;
    }
    const count = this.state.amountCount - 1;
    this.setState({ amountCount: count < 0 ? 0 : count });
  };

  addAmount = () => {
    this.setState({ amountCount: this.state.amountCount + 1 });
  };

  goToCart = () => {
    if (this.state.amountCount === 0) {
      alert('제품의 수량을 입력해주세요. ');
    } else {
      // 장바구니, 구매하기 페이지로 이동하기
    }
  };

  onClickHandler = () => {
    this.props.closeCartModal();
  };
  render() {
    const { cartData } = this.props;
    const { amountCount } = this.state;

    console.log(this.state.amountCount);
    return (
      <div className="cart_modal">
        <div className="modal_container">
          <div className="btn_container">
            <button className="close_btn" onClick={this.onClickHandler}>
              옵션 닫기
            </button>
          </div>
          <div className="wrapper">
            <div className="contents_container">
              <span className="item_name">{cartData.title}</span>
              <div className="right">
                <span className="amount">수량</span>
                <span className="cal_amount">
                  {/*  구현할부분 */}
                  <button className="minus_btn" onClick={this.substractAmount}>
                    -
                  </button>
                  <input
                    className="amount_status"
                    value={this.state.amountCount}
                    onChange={this.handleAmountInput}
                  />
                  <button className="plus_btn" onClick={this.addAmount}>
                    +
                  </button>
                </span>
                <span className="price">
                  {(
                    cartData.price *
                    (1 - cartData.discount_rate)
                  ).toLocaleString()}
                  원
                </span>
              </div>
            </div>
          </div>
          <div className="total_price">
            총 금액:{' '}
            {(
              amountCount *
              (cartData.price * (1 - cartData.discount_rate).toLocaleString())
            ).toLocaleString()}
            원
          </div>

          <div className="buttons_container">
            <button className="interested">
              <i className="fas fa-heart"></i> 관심상품
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

import React, { Component } from 'react';
import './Cart.scss';
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }
  handleIncrease = () => {
    if (this.state.number > 30) {
      return 30;
    }
    this.setState({
      number: this.state.number + 1,
    });
  };
  handleDecrease = () => {
    if (this.state.number < 2) {
      return 1;
    }
    this.setState({
      number: this.state.number - 1,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <main className="cart-wrapper">
        <h2> 장바구니 </h2>
        <div className="cart-content">
          <div className="selectAllOrDelete">
            <button>전체선택</button>
            <button>선택삭제</button>
          </div>
          <div className="select-products">
            <form className="check-wrapper"></form>
            <div className="cart-select">
              <ul className="cart-select-list">
                <li className="item">
                  <label>
                    <input className="check-circle" type="checkbox" />
                  </label>
                  <img scr="/" alt="no img" />
                  <div className="item-name">
                    <a href="#" className="package">
                      [달래된장]] 여기 맵돌려야되요
                    </a>
                    <a href="#" className="product">
                      [달래된장] 미니미 베리베리{' '}
                    </a>
                  </div>

                  <form className="count-btn" onSubmit={this.handleSubmit}>
                    <button>
                      <i class="fas fa-minus" onClick={this.handleDecrease}></i>
                    </button>
                    <input type="text" value={this.state.number}></input>
                    <button onClick={this.handleIncrease}>
                      <i class="fas fa-plus"></i>
                    </button>
                    <span></span>
                  </form>
                  <div className="price">
                    <dl className="total-price-wrapper">
                      <dt className="total-price">
                        백엔드가격<span>원</span>
                      </dt>
                      <dd className="discount-price">
                        500 <span>원</span>
                      </dd>
                    </dl>
                    <button className="del-btn">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="cart-result">
            <div className="inner-result">
              <div className="amount-view">
                <dl className="dl">
                  <dt className="dt">상품금액</dt>
                  <dd>
                    <span className="total-price">
                      0<span>원</span>
                    </span>
                  </dd>
                </dl>
                <dl className="dl">
                  <dt className="dt">상품할인금액</dt>
                  <dd>
                    <span>
                      0<span>원</span>
                    </span>
                  </dd>
                </dl>
                <dl className="final-dl">
                  <dt className="dt">결제예정금액</dt>
                  <dd>
                    <span className="final-price">
                      8800<span>원</span>
                    </span>
                  </dd>
                </dl>
              </div>
              <form className="submit">
                <button className="submit-btn">구매하기</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default Cart;

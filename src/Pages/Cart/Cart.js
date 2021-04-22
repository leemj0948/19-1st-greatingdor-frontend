import React, { Component } from 'react';
import './Cart.scss';
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      number: 1,
    };
  }
  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  handleDecrease = () => {
    if (this.state.number <= 1) {
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
      <main className="cartWrapper">
        <h2> 장바구니 </h2>
        <div className="cartContent">
          <div className="selectAllOrDelete">
            <button>전체선택</button>
            <button>선택삭제</button>
          </div>
          <div className="selectProducts">
            <ul className="cartSelectList">
              <li className="item">
                <label>
                  <input className="checkCircle" type="checkbox" />
                </label>
                <img scr="/" alt="no img" />
                <div className="itemName">
                  <a href="#" className="package">
                    [달래된장]] 여기 맵
                  </a>
                  <a href="#" className="product">
                    [달래된장] 대애앤장{' '}
                  </a>
                </div>
                <form className="countBtn" onSubmit={this.handleSubmit}>
                  <button>
                    <i class="fas fa-minus" onClick={this.handleDecrease}></i>
                  </button>
                  <input type="text" value={this.state.number}></input>
                  <button onClick={this.handleIncrease}>
                    <i class="fas fa-plus"></i>
                  </button>
                </form>
                <div className="price">
                  <dl className="totalPriceWrapper">
                    <dt className="totalPrice">
                      백엔드에서 받는 가격<span>원</span>
                    </dt>
                  </dl>
                  <button className="deleteBtn">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className="cartResult">
            <div className="priceView">
              <dl className="dl">
                <dt className="dt">상품금액</dt>
                <dd>
                  <span className="totalPrice">
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
              <dl className="finalDl">
                <dt className="dt">결제예정금액</dt>
                <dd>
                  <span className="finalPrice">
                    8800<span>원</span>
                  </span>
                </dd>
              </dl>
            </div>
            <form className="submit">
              <button className="submitBtn">구매하기</button>
            </form>
          </div>
        </div>
      </main>
    );
  }
}
export default Cart;

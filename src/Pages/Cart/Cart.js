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
          <div className="select-products">
            <form className="check-wrapper">
              <label>
                <input className="check-circle" type="checkbox" />
                <button className="check-all">전체선택</button>
              </label>
              <span className="divide">|</span>
              <button className="del-select">선택삭제</button>
            </form>
            <div className="cart-select">
              <ul className="cart-select-list">
                <li className="item">
                  <label>
                    <input className="check-circle" type="checkbox" />
                  </label>
                  <img scr="/" alt="no img" />
                  <div className="item-name">
                    <a href="#" className="package">
                      [춰컬릿] 준형님 여기 맵돌려야되요
                    </a>
                    <a href="#" className="product">
                      [춰컬릿] 미니미 베리베리{' '}
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
              <div className="cart-delivery">
                <p className="address">
                  <i className="fas fa-map-marker-alt"></i> 배송지
                </p>
                <p className="address">백엔드에서 받을곳</p>
                <button type="button" className="change-btn">
                  배송지변경
                </button>
              </div>
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
                <dl className="dl">
                  <dt className="dt">배송비</dt>
                  <dd>
                    <span className="total-price">
                      0<span>원</span>
                    </span>
                  </dd>
                </dl>
                <dl className="final-dl">
                  <dt className="dt">결제예정금액</dt>
                  <dd>
                    <span className="final-price">
                      0<span>원</span>
                    </span>
                  </dd>
                </dl>
              </div>
              <div className="free-delivery-fee">
                <span>주문하면</span>
                <span className="final-price">
                  0<span>분</span>
                </span>
                <span>동안 무료배송</span>
              </div>
              <form className="submit">
                <button className="submit-btn">주문하기</button>
              </form>
              <div className="notice">
                <p>쿠폰/적립금은 주문서에서 사용 가능합니다</p>
                <p>
                  '입금확인'상태일 때는 주문 내역 상세에서 직접 주문취소가
                  가능합니다.
                </p>
                <p>'입금확인'이후 상태에는 고객센터로 문의해 주세요.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default Cart;

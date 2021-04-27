import React, { Component } from 'react';
import './Cart.scss';
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      number: 1,
      get: [],
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
  componentDidMount = () => {
    fetch('http://3.36.96.154:8000/orders/cart', { method: 'GET' })
      .then(res => res.json())
      .then(data =>
        this.setState(
          {
            get: data,
          },
          () => {
            console.log(this.state.data);
          }
        )
      );
  };
  // componentDidUpdate(prevState) {
  //   if (prevState.get !== this.state.get) {
  //     fetch('http://10.58.7.158:8000/orders/cart', { method: 'GET' })
  //       .then(res => res.json())
  //       .then(data =>
  //         this.setState({
  //           get: data,
  //         })
  //       );
  //   }
  // }
  //img_url,title,price
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
                {this.state.get.map((ele, index) => { 
                <li className="item">
                <label>
                  <input className="checkCircle" type="checkbox" />
                </label>
                <span scr="/" alt="no img" >{ele.img_url}<span/>
                <div className="itemName">
                  <span className="package">{ele.title}</span>
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
                       {ele.price}<span>원</span>
                      </dt>
                  </dl>
                  <button className="deleteBtn">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
                </li>
              })}
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

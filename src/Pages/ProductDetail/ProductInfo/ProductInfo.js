import React, { Component } from 'react';
import CartModal from './CartModal/CartModal';
import './ProductInfo.scss';

class ProductInfo extends Component {
  state = {
    isCartModalOn: false,
    cartData: [],
  };

  showCartModal = () => {
    this.setState({ isCartModalOn: !this.state.isCartModalOn });
    fetch('/data/cartData.json')
      .then(response => response.json())
      .then(data => this.setState({ cartData: data }));
  };

  render() {
    const { item } = this.props;
    const { cartData } = this.state;
    return (
      <div className="product_info">
        <div className="product_info_header">
          <span>{item.description}</span>
          <span className="icons">
            <button>
              <i className="far fa-heart"></i>
            </button>
            <button>
              <i className="fas fa-share-alt"></i>
            </button>
          </span>
        </div>
        <div className="product_info_name">{item.title}</div>
        {/* tags로 접근 */}
        {/* <div className="product_info_icons">
          {item.icons.map(icon => {
            return (
              <>
                <span>{icon}</span>;
              </>
            );
          })}
        </div> */}
        <div className="product_amount">
          <span>용량</span>
          <span>{item.capacity}</span>
        </div>
        <div className="product_calorie">
          <span>칼로리</span>
          <span>{item.kcal}</span>
        </div>
        <div className="product_origin">밀가루(밀:미국,캐나다산)</div>
        <div className="product_price">{item.price}</div>
        <div className="product_delivery">
          <span className="delivery">택배배송</span>
          <span>5pm 이전 결제시 4월 17일(토) 도착 가능</span>
        </div>
        <div className="button_list">
          <button className="store_cart modal_on" onClick={this.showCartModal}>
            장바구니 담기
          </button>
          <button className="buy" onClick={this.showCartModal}>
            구매하기
          </button>
          <button className="present">선물하기</button>
        </div>
        {this.state.isCartModalOn && (
          <CartModal showCartModal={this.showCartModal} cartData={cartData} />
        )}
      </div>
    );
  }
}

export default ProductInfo;

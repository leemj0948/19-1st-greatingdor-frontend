import React, { Component } from 'react';
import CartModal from './CartModal/CartModal';
import './ProductInfo.scss';

class ProductInfo extends Component {
  state = {
    isCartModalOn: false,
    cartData: [],
  };

  showCartModal = () => {
    this.onOffCartModal();
    fetch(`http://3.36.96.154:8000/products/${this.props.item.id}/options`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          cartData: data.RESULT.map(cart => {
            cart.count = 1;
            return cart;
          }),
        });
      });
  };

  onOffCartModal = () => {
    this.setState({ isCartModalOn: !this.state.isCartModalOn });
  };

  changeCount = (count, option_id) => {
    this.setState({
      cartData: this.state.cartData.map(cart => {
        if (cart.option_id === option_id) {
          cart.count = count;
        }
        return cart;
      }),
    });
  };

  render() {
    const { item } = this.props;
    const { cartData, isCartModalOn } = this.state;

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
        <div className="product_info_icons">
          {item.tags &&
            item.tags.map((icon, idx) => {
              return (
                <>
                  <span key={idx}>{icon}</span>
                </>
              );
            })}
        </div>
        <div className="product_amount">
          <span>용량</span>
          <span>{item.capacity} g</span>
        </div>
        {/* <div className="product_calorie">
          <span>칼로리</span>
          <span>{item.kcal} kcal</span>
        </div> */}
        <div className="product_price">
          {item.price !== item.discount_price ? (
            <>
              <span className="discount_price">
                {item.discount_price.toLocaleString()}원
              </span>
              <span className="original_price">
                {item.price.toLocaleString()}원
              </span>
            </>
          ) : (
            <span className="discount_price">{item.discount_price}원</span>
          )}
        </div>
        <div className="product_delivery">
          <span className="delivery">택배배송</span>
          <div>5pm 이전 결제시 4월 17일(토) 도착 가능</div>
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
        {isCartModalOn && (
          <CartModal
            showCartModal={this.showCartModal}
            onOffCartModal={this.onOffCartModal}
            cartData={cartData}
            changeCount={this.changeCount}
          />
        )}
      </div>
    );
  }
}

export default ProductInfo;

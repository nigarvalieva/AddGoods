import React, { PureComponent } from "react";
import "../styles.css";
import store from "../redux/reducers/store";
import CartItem from './CartItem';
import { connect } from "react-redux";

class Cart extends PureComponent {
  state = {
    cartGoods: []
  }
  getTotal() {
    const { cartGoods } = this.state;
    return cartGoods.reduce((acc, item) => acc + item.price, 0);
  } 

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      this.setState({ 
        cartGoods: state.cart 
      });
    });
  }
    
  render() {
    return (
      <div className="cart">
        <h2 className="cart__title" >Shopping Cart</h2>
        { this.state.cartGoods.length ?
          <ul className="cart__list">
            {this.state.cartGoods.map((item, index) => (
              <li className="cart__list-item" key={index}>
                <CartItem {...item} />
              </li>
            ))}
          </ul>
        :
          <p className="cart__note">Nothing in the cart now</p>
        }

        <p className="cart__total">Total: {this.getTotal()}.00$</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartGoods: state.cart,
  }
};

export default connect(mapStateToProps)(Cart);

import React, { PureComponent } from "react";
import { deleteGoodFromCart } from "../redux/actions/action";
import { connect } from "react-redux";
import "../styles.css";

class CartItem extends PureComponent {
  render() {
    const { id, title, price } = this.props;
    return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$</p>
        <button className="delete" onClick={() => this.props.deleteGoodFromCart(id)}>X</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteGoodFromCart: (id) => dispatch(deleteGoodFromCart(id)),
});

export default connect(null, mapDispatchToProps)(CartItem);
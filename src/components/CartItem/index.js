import React from 'react';
import Product from '../Product';

class CartItem extends React.Component {
  render() {
    return (
      <li className="cart-item">
        <Product
          title={this.props.product.title}
          price={this.props.product.price}
          quantity={this.props.product.quantity}
        />
        <button
          className="typo-btn typo-btn--small typo-btn--small--less"
          onClick={this.props.onLessProduct}>
          -
        </button>
        <button
          className="typo-btn typo-btn--small typo-btn--small--more"
          onClick={this.props.onMoreProduct}>
          +
        </button>
      </li>
    );
  }
}

CartItem.propTypes = {
  product    : React.PropTypes.shape({
    id       : React.PropTypes.number,
    title    : React.PropTypes.string.isRequired,
    price    : React.PropTypes.number.isRequired,
    quantity : React.PropTypes.number.isRequired
  }).isRequired,
  onMoreProduct : React.PropTypes.func.isRequired,
  onLessProduct : React.PropTypes.func.isRequired
};

export default CartItem;
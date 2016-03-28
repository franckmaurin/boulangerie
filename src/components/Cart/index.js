import './styles.css';
import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import { selectProduct, unselectProduct } from '../../actions';
import CartItem from '../CartItem';
import CartList from '../CartList';

export class Cart extends React.Component {
  render() {
    // Creates an array of selected products with details
    // Calculate the total price.
    let products = [];
    let cartPrice = 0;
    this.props.cartList.map(cartItem => {
      let { id, title, price } = _.findWhere(this.props.shopList, { id: cartItem.id });
      let quantity = cartItem.quantity;
      price = quantity * price;
      products.push({
        id,
        title,
        quantity,
        price
      });
      cartPrice += price;
    });

    return (
      <CartList
        title="Your selected products"
        price={cartPrice}>
        {products.map(product => {
          return (
            <CartItem
              key={product.id}
              product={product}
              onMoreProduct={() => this.props.selectProduct(product.id)}
              onLessProduct={() => this.props.unselectProduct(product.id)}
            />
          )
        })}
      </CartList>
    );
  }
}

Cart.propTypes = {
  shopList   : React.PropTypes.arrayOf(React.PropTypes.shape({
    id       : React.PropTypes.number.isRequired,
    title    : React.PropTypes.string.isRequired,
    price    : React.PropTypes.number.isRequired,
    cover    : React.PropTypes.string.isRequired
  })).isRequired,
  cartList   : React.PropTypes.arrayOf(React.PropTypes.shape({
    id       : React.PropTypes.number.isRequired,
    quantity : React.PropTypes.number.isRequired
  })).isRequired,
  selectProduct   : React.PropTypes.func.isRequired,
  unselectProduct : React.PropTypes.func.isRequired
};

export default connect(
  state => state,
  {selectProduct, unselectProduct}
)(Cart);
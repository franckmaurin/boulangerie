import React from 'react';
import Product from '../Product';

class ShopItem extends React.Component {
  render() {
    return (
      <li className="shop-item">
        <Product
          id={this.props.product.id}
          title={this.props.product.title}
          price={this.props.product.price}
          cover={this.props.product.cover}
        />
        <button
          className="shop-item-btn typo-btn typo-btn--rounded"
          onClick={this.props.onSelectProduct}>
          +
        </button>
      </li>
    );
  }
}

ShopItem.propTypes = {
  product : React.PropTypes.shape({
    id    : React.PropTypes.number.isRequired,
    title : React.PropTypes.string.isRequired,
    price : React.PropTypes.number.isRequired,
    cover : React.PropTypes.string.isRequired
  }).isRequired,
  onSelectProduct : React.PropTypes.func.isRequired
};

export default ShopItem;
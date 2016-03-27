import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        { this.props.cover ?
          <div
            className="product-cover"
            style={{ backgroundImage: 'url('+this.props.cover+')'}}
          />
          : null
        }
        <div className="product-info">
          <h2 className="product-title typo-subtitle">{this.props.title}</h2>
          <span className="product-price typo-price">${(+this.props.price).toFixed(2)}</span>
          { this.props.quantity ? <span className="product-quantity">{this.props.quantity}</span> : null }
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  title    : React.PropTypes.string,
  price    : React.PropTypes.number,
  cover    : React.PropTypes.string,
  quantity : React.PropTypes.number
};

export default Product;
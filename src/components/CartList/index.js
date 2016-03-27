import React from 'react';

class CartList extends React.Component {
  render() {
    const bill = (
      <div className="cart-inner">
        <header className="cart-header">
          <h1 className="cart-title typo-title">{this.props.title}</h1>
          <h2 className="cart-subtitle typo-small">
            <span>Qty</span>
            <span>Designation</span>
            <span>Price</span>
          </h2>
        </header>
        <ul className="cart-list">
          { this.props.children }
        </ul>
        <footer className="cart-footer typo-price">
          <span className="typo-small">Total :</span> ${(this.props.price).toFixed(2)}
        </footer>
      </div>
    );

    const billEmpty = (
      <div className="cart-inner cart-inner--empty">
        <p>No product selected yet.</p>
      </div>
    );

    return (
      <section className="cart">
        { this.props.children.length ? bill : billEmpty }
      </section>
    );
  }
}

CartList.propTypes = {
  children : React.PropTypes.node,
  title    : React.PropTypes.string.isRequired,
  price    : React.PropTypes.number.isRequired
};

export default CartList;
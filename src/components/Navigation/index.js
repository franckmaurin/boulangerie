import './styles.css';
import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import { Link } from 'react-router';

class Navigation extends React.Component {
  render() {
    // Gets the total items in the cart
    let cartLength = 0;
    this.props.cartList.map(cartItem => {
      cartLength += cartItem.quantity;
    });

    return (
      <nav className="navigation">
        <ul>
          <li className="navigation-item">
            <Link className="navigation-link" to="/" activeClassName="is-active">
              <svg><use xlinkHref="/assets/images/sprite.svg#shop"/></svg>
              <span className="navigation-label">La Boulangerie</span>
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="/create-product" activeClassName="is-active">
              <svg><use xlinkHref="/assets/images/sprite.svg#create"/></svg>
              <span className="navigation-label">Create a product</span>
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="/cart" activeClassName="is-active">
              <svg><use xlinkHref="/assets/images/sprite.svg#cart"/></svg>
              <span className="navigation-label">Cart</span>
              <span className={ cartLength ? "navigation-notif" : "navigation-notif is-empty" }>{cartLength}</span>
            </Link>
          </li>
          <li className="navigation-item navigation-item--right">
            <a className="navigation-link" target="_blank" href="https://github.com/franckmaurin/">
              <svg><use xlinkHref="/assets/images/sprite.svg#github"/></svg>
              <span className="navigation-label">Code</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  cartList   : React.PropTypes.arrayOf(React.PropTypes.shape({
    id       : React.PropTypes.number.isRequired,
    quantity : React.PropTypes.number.isRequired
  })).isRequired
};

function mapStateToProps(state) {
  return {
    cartList: state.cartList
  }
};

export default connect(
  mapStateToProps
)(Navigation);
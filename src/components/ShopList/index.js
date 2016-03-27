import React from 'react';

class ShopList extends React.Component {
  render() {
    return (
      <section className="shop">
        <header className="shop-header">
          <svg><use xlinkHref="/assets/images/sprite.svg#bread"></use></svg>
          <h1 className="shop-title typo-title">{this.props.title}</h1>
          <h2 className="shop-subtitle typo-subtitle">{this.props.subtitle}</h2>
        </header>
        <ul className="shop-list">
          {this.props.children}
        </ul>
      </section>
    );
  }
}

ShopList.propTypes = {
  children : React.PropTypes.node,
  title    : React.PropTypes.string.isRequired,
  subtitle : React.PropTypes.string.isRequired
};

export default ShopList;
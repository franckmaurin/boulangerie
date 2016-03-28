import './styles.css';
import React             from 'react';
import { connect }       from 'react-redux';
import { selectProduct } from '../../actions';
import ShopItem          from '../ShopItem';
import ShopList          from '../ShopList';

export class Shop extends React.Component {
  render() {
    return (
      <ShopList
        title="La Boulangerie"
        subtitle="An another french bakery yet.">
        {this.props.shopList.map(product =>
          <ShopItem
            key={product.id}
            product={product}
            onSelectProduct={(e) => {
              e.preventDefault();
              animationBeforeSelectProduct(e);
              setTimeout(() => {
                this.props.selectProduct(product.id);
              }, 500);
            }}
          />
        )}
      </ShopList>
    );
  }
}

Shop.propTypes = {
  shopList : React.PropTypes.arrayOf(React.PropTypes.shape({
    id     : React.PropTypes.number.isRequired,
    title  : React.PropTypes.string.isRequired,
    price  : React.PropTypes.number.isRequired,
    cover  : React.PropTypes.string.isRequired
  })).isRequired,
  selectProduct : React.PropTypes.func.isRequired
};

/**
 * animationBeforeSelectProduct() make an animation
 * when the user add a product in its cart by creating
 * and removing a DOM element.
 *
 * @typedef {Object} MouseEvent
 * @param {MouseEvent} event
 *
 */
function animationBeforeSelectProduct(event) {
  let {left: fromLeft, top: fromTop} = event.currentTarget.getBoundingClientRect();
  let {left: toLeft,   top: toTop}   = document.querySelector('.navigation-notif').getBoundingClientRect();
  let transformCss = 'translate('+(toLeft-fromLeft-16)+'px, '+(toTop-fromTop-16)+'px) scale(.4)';
  let bubble = event.currentTarget.cloneNode(true);
      bubble.classList.add('typo-btn--rounded--clone');
      bubble.style.top  = fromTop+'px';
      bubble.style.left = fromLeft+'px';
  document.body.appendChild(bubble);
  setTimeout(() => {
    bubble.style.transform       = transformCss;
    bubble.style.WebkitTransform = transformCss;
    bubble.style.opacity         = 0;
    bubble.style.background      = '#39F';
  }, 17);
  setTimeout(() => {
    document.body.removeChild(bubble);
  }, 500);
}

function mapStateToProps(state) {
  return {
    shopList: state.shopList
  }
}

export default connect(
  mapStateToProps,
  {selectProduct}
)(Shop);
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Cart from './index';

// store
import configureStore from '../../store/configureStore';
const store = configureStore();

describe('<Cart />', () => {
  const shopList = [
    {
      id: 1458988515400,
      title: "Baguette",
      price: 1.2,
      cover: "/assets/images/baguette.png"
    },
    {
      id: 1458988515401,
      title: "Pain de campagne",
      price: 2.49,
      cover: "/assets/images/pain-de-campagne.png"
    }
  ];
  const cartList = [
    {
      id: 1458988515400,
      quantity: 2
    },
    {
      id: 1458988515401,
      quantity: 1
    }
  ];

  store.getState = function() {
    return {
      shopList,
      cartList
    };
  };

  it('should render CartList component', () => {
    const wrapper = render(<Cart store={store} />);
    expect(wrapper.find('.cart-list')).to.have.length(1);
  });

  it('should render CartItem components', () => {
    const wrapper = render(<Cart store={store} />);
    expect(wrapper.find('.cart-item')).to.have.length(2);
  });

  it('should render the price with two decimals', () => {
    const wrapper = render(<Cart store={store} />);
    expect(wrapper.text()).to.contain("$4.89");
  });
});
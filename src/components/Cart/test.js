import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { Cart } from './index';
import CartList from '../CartList';
import CartItem from '../CartItem';

describe('<Cart />', () => {
  const props = {
    shopList: [{
      id: 1458988515400,
      title: "Baguette",
      price: 1.2,
      cover: "/assets/images/baguette.png"
    }, {
      id: 1458988515401,
      title: "Pain de campagne",
      price: 2.49,
      cover: "/assets/images/pain-de-campagne.png"
    }],
    cartList: [{
      id: 1458988515400,
      quantity: 2
    }, {
      id: 1458988515401,
      quantity: 1
    }],
    selectProduct: () => {},
    unselectProduct: () => {}
  };

  it('should render CartList component', () => {
    const wrapper = shallow(<Cart {...props} />);
    expect(wrapper.find(CartList)).to.have.length(1);
  });

  it('should render CartItem components', () => {
    const wrapper = shallow(<Cart {...props} />);
    expect(wrapper.find(CartItem)).to.have.length(2);
  });

  it('should render the price with two decimals', () => {
    const wrapper = render(<Cart {...props} />);
    expect(wrapper.text()).to.contain("$4.89");
  });
});
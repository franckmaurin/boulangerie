import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import CartItem from './index';
import Product from '../Product';

describe('<CartItem />', () => {
  const props = {
    product: {
      title: "Baguette",
      price: 12.00,
      cover: "/assets/images/baguette.png",
      quantity: 10
    },
    onMoreProduct: sinon.spy(),
    onLessProduct: sinon.spy()
  };

  it('should render Product component', () => {
    const wrapper = shallow(<CartItem {...props} />);
    expect(wrapper.find(Product)).to.have.length(1);
  });

  it('should render two <button />', () => {
    const wrapper = shallow(<CartItem {...props} />);
    expect(wrapper.find('button')).to.have.length(2);
  });

  it('simulates click onLessProduct event', () => {
    const wrapper = shallow(<CartItem {...props} />);
    wrapper.find('.typo-btn--small--less').simulate('click');
    expect(props.onLessProduct.calledOnce).to.equal(true);
  });

  it('simulates click onMoreProduct event', () => {
    const wrapper = shallow(<CartItem {...props} />);
    wrapper.find('.typo-btn--small--more').simulate('click');
    expect(props.onMoreProduct.calledOnce).to.equal(true);
  });
});
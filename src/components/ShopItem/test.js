import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import ShopItem from './index';
import Product from '../Product';

describe('<ShopItem />', () => {
  const props = {
    product: {
      id: 1458988515400,
      title: "Baguette",
      price: 12.00,
      cover: "/assets/images/baguette.png"
    },
    onSelectProduct: sinon.spy()
  };

  it('should render Product component', () => {
    const wrapper = shallow(<ShopItem {...props} />);
    expect(wrapper.find(Product)).to.have.length(1);
  });

  it('should render <button />', () => {
    const wrapper = shallow(<ShopItem {...props} />);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('simulates click onSelectProduct event', () => {
    const wrapper = shallow(<ShopItem {...props} />);
    wrapper.find('.typo-btn--rounded').simulate('click');
    expect(props.onSelectProduct.calledOnce).to.equal(true);
  });
});
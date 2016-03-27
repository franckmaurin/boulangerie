import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import CartList from './index';
import CartItem from '../CartItem';

describe('<CartList />', () => {
  const props = {
    title: "*title*",
    price: 12.00,
    children: ['*children*']
  };
  const emptyCartProps = {
    title: "Your selected products",
    price: 0,
    children: []
  };

  it('should render the title', () => {
    const wrapper = render(<CartList {...props} />);
    expect(wrapper.text()).to.contain("*title*");
  });

  it('should render the price with two decimals', () => {
    const wrapper = render(<CartList {...props} />);
    expect(wrapper.text()).to.contain("$12.00");
  });

  it('should render children', () => {
    const wrapper = render(<CartList {...props} />);
    expect(wrapper.text()).to.contain("*children*");
  });

  it('should render message for empty cart', () => {
    const wrapper = render(<CartList {...emptyCartProps} />);
    expect(wrapper.text()).to.contain("No product selected yet");
  });
});
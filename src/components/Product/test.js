import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Product from './index.js';

describe('<Product />', () => {
  const props = {
    title: "Baguette",
    price: 12.00,
    cover: "/assets/images/baguette.png",
    quantity: 10
  };

  it('should render the title', () => {
    const wrapper = render(<Product {...props} />);
    expect(wrapper.text()).to.contain("Baguette");
  });

  it('should render the price with two decimals', () => {
    const wrapper = render(<Product {...props} />);
    expect(wrapper.text()).to.contain("$12.00");
  });

  it('should render the quantity', () => {
    const wrapper = render(<Product {...props} />);
    expect(wrapper.text()).to.contain('10');
  });
});
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import ShopList from './index';

describe('<ShopList />', () => {
  const props = {
    title: "*title*",
    subtitle: "*subtitle*",
    children: ['*children*']
  };

  it('should render the title', () => {
    const wrapper = render(<ShopList {...props} />);
    expect(wrapper.text()).to.contain("*title*");
  });

  it('should render the subtitle', () => {
    const wrapper = render(<ShopList {...props} />);
    expect(wrapper.text()).to.contain("*subtitle*");
  });

  it('should render children', () => {
    const wrapper = render(<ShopList {...props} />);
    expect(wrapper.text()).to.contain("*children*");
  });
});
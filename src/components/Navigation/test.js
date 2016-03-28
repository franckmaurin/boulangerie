import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { Navigation } from './index';

describe('<Navigation />', () => {
  it('should render product length', () => {
    const props = {
      cartList: [{
        id: 1458988515400,
        quantity: 2
      }, {
        id: 1458988515401,
        quantity: 1
      }]
    };
    const wrapper = render(<Navigation {...props} />);
    expect(wrapper.text()).to.contain(3);
  });

  it('should no render product length', () => {
    const props = {
      cartList: []
    };
    const wrapper = render(<Navigation {...props} />);
    expect(wrapper.find('.is-empty')).to.have.length(1);
  });
});
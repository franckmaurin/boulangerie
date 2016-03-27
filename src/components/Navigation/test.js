import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Navigation from './index';

// store
import configureStore from '../../store/configureStore';
const store = configureStore();

describe('<Navigation />', () => {
  it('should render product length', () => {
    store.getState = function() {
      return {
        cartList: [
          {
            id: 1458988515400,
            quantity: 2
          },
          {
            id: 1458988515401,
            quantity: 1
          }
        ]
      };
    };
    const wrapper = render(<Navigation store={store} />);
    expect(wrapper.text()).to.contain(3);
  });

  it('should no render product length', () => {
    store.getState = function() {
      return {
        cartList: []
      };
    };
    const wrapper = render(<Navigation store={store} />);
    expect(wrapper.find('.is-empty')).to.have.length(1);
  });
});
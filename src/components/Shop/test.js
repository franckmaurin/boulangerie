import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Shop from './index';

// store
import configureStore from '../../store/configureStore';
const store = configureStore();
store.getState = function() {
  return {
    shopList: [
      {
        id: 1458988515400,
        title: "Baguette",
        price: 1.2,
        cover: "/assets/images/baguette.png"
      }, {
        id: 1458988515401,
        title: "Pain de campagne",
        price: 2.49,
        cover: "/assets/images/pain-de-campagne.png"
      }, {
        id: 1458988515402,
        title: "Brioche",
        price: 2.99,
        cover: "/assets/images/brioche.png"
      }
    ]
  };
};

describe('<Shop />', () => {
  it('should render shopList component', () => {
    const wrapper = render(<Shop store={store} />);
    expect(wrapper.find('.shop-list')).to.have.length(1);
  });

  it('should render shopItem components', () => {
    const wrapper = render(<Shop store={store} />);
    expect(wrapper.find('.shop-item')).to.have.length(3);
  });
});
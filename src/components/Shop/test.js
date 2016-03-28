import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { Shop } from './index';
import ShopList from '../ShopList';
import ShopItem from '../ShopItem';

describe('<Shop />', () => {
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
    }, {
      id: 1458988515402,
      title: "Brioche",
      price: 2.99,
      cover: "/assets/images/brioche.png"
    }],
    selectProduct: () => {}
  };

  it('should render shopList component', () => {
    const wrapper = shallow(<Shop {...props} />);
    expect(wrapper.find(ShopList)).to.have.length(1);
  });

  it('should render shopItem components', () => {
    const wrapper = shallow(<Shop {...props} />);
    expect(wrapper.find(ShopItem)).to.have.length(3);
  });
});
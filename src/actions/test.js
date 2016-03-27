import { expect } from 'chai';
import * as actions from './index.js';
import api from '../api';
import products from '../api/products.json';

describe('Actions', () => {
  const id = 1458988515400;

  it('selectProduct should create SELECT_PRODUCT action', () => {
    expect(actions.selectProduct(id)).to.deep.equal({
      type: 'SELECT_PRODUCT',
      productId: id
    });
  });

  it('unselectProduct should create UNSELECT_PRODUCT action', () => {
    expect(actions.unselectProduct(id)).to.deep.equal({
      type: 'UNSELECT_PRODUCT',
      productId: id
    });
  });

  describe('Asynchronous', () => {
    let state = {};
    let id = false;
    let cover = false;

    beforeEach(() => {
      api.getProducts((products) => {
        state = products;
      });
      api.createProduct({ title:"Test", price: 1.00, cover: false }, (products) => {
        id = products.id;
        cover = products.cover;
      });
    });

    it('getProducts should return correct data', () => {
      expect(state).to.deep.equal({
        shopList: products,
        cartList: []
      });
    });

    it('createProduct should return an id', () => {
      expect(id).to.be.a('number');
    });

    it('createProduct should return the default 404 cover path', () => {
      expect(cover).to.equal('/assets/images/404.png');
    });
  });
});

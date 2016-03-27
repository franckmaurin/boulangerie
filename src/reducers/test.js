import { expect } from 'chai';
import shopList from './shopList';
import cartList from './cartList';

describe('Reducers', () => {
  describe('shopList', () => {
    const initialState = [];
    const firstState = [{
      "id": 1458988515401,
      "title": "Pain de campagne",
      "price": 2.49,
      "cover": "/assets/images/pain-de-campagne.png"
    }];
    const secondState = [{
      "id": 1458988515400,
      "title": "Baguette",
      "price": 1.20,
      "cover": "/assets/images/baguette.png"
    }, {
      "id": 1458988515401,
      "title": "Pain de campagne",
      "price": 2.49,
      "cover": "/assets/images/pain-de-campagne.png"
    }];

    it('should provide the initial state', () => {
      expect(shopList(undefined, {})).to.deep.equal(initialState);
    });

    it('should handle CREATE_PRODUCT action', () => {
      expect(shopList(firstState, {
        type: 'CREATE_PRODUCT',
        id: 1458988515400,
        title: "Baguette",
        price: 1.20,
        cover: "/assets/images/baguette.png"
      })).to.deep.equal(secondState);
    });

    it('should handle GET_PRODUCTS action', () => {
      expect(shopList(undefined, {
        type: 'GET_PRODUCTS', products: { shopList: firstState }
      })).to.deep.equal(firstState);
    });
  });

  describe('cartList', () => {
    const initialState = [];

    it('should provide the initial state', () => {
      expect(cartList(undefined, {})).to.deep.equal(initialState);
    });

    it('should handle SELECT_PRODUCT action first', () => {
      expect(cartList(initialState, { type: 'SELECT_PRODUCT', productId: 1 })).to.deep.equal([
        { id: 1, quantity: 1 }
      ]);
    });

    it('should handle SELECT_PRODUCT action a second time', () => {
      expect(cartList([{ id: 1, quantity: 1 }], { type: 'SELECT_PRODUCT', productId: 1 })).to.deep.equal([
        { id: 1, quantity: 2 }
      ]);
    });

    it('should handle UNSELECT_PRODUCT action first', () => {
      expect(cartList([{ id: 1, quantity: 2 }], { type: 'UNSELECT_PRODUCT', productId: 1 })).to.deep.equal([
        { id: 1, quantity: 1 }
      ]);
    });

    it('should handle UNSELECT_PRODUCT action a second time', () => {
      expect(cartList([{ id: 1, quantity: 1 }], {
        type: 'UNSELECT_PRODUCT', productId: 1
      })).to.deep.equal(initialState);
    });

    it('should handle GET_PRODUCTS action', () => {
      expect(cartList(undefined, {
        type: 'GET_PRODUCTS', products: { cartList: initialState }
      })).to.deep.equal(initialState);
    });
  });
});
import api from '../api';

/**
 * @param {Number} productId
 * @return {Object}
 */
export function selectProduct(productId) {
  return {
    type: 'SELECT_PRODUCT',
    productId
  };
}

/**
 * @param {Number} productId
 * @return {Object}
 */
export function unselectProduct(productId) {
  return {
    type: 'UNSELECT_PRODUCT',
    productId
  };
}

/**
 * Calls the API with data from the form and receive
 * a complete object (with an ID and the cover converted in dataURL).
 * Dispatches the CREATE_PRODUCT action with those data.
 *
 * @param {Object} productData
 * @return {Function}
 */
export function createProduct(productData) {
  return (dispatch) => {
    api.createProduct(productData, (data) => {
      dispatch(Object.assign(
        { type: 'CREATE_PRODUCT' },
        data
      ));
    });
  };
}

/**
 * Returns the initial state (shop and selected products)
 * getting the localstorage or calling the API else.
 *
 * @return {Object|Function} The initial state
 */
export function getProducts() {
  let local  = typeof localStorage !== 'undefined' ? localStorage.getItem('redux') : false;
  if(local) {
    return {
      type: 'GET_PRODUCTS',
      products: JSON.parse(local)
    };
  } else {
    return (dispatch) => {
      api.getProducts((products) => {
        dispatch({
          type: 'GET_PRODUCTS',
          products: products
        });
      });
    };
  }
}
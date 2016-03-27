import _ from 'underscore';

/**
 * Returns the index of an object by its id attribute.
 * (-1 if the object is not in the array)
 *
 * @param {Array} list
 * @param {Number} id
 * @return {Number}
 */
function getIndexById(list, id) {
  return _.findIndex(list, { id });
}

/**
 * It's the reducer function which manage
 * the array of selected products like that :
 * [
 *   { id, quantity }
 * ]
 *
 * @param {Array} state - The previous state
 * @param {Object} action
 * @param {String} action.type Description of what to do
 * @return {Array} The next state
 */
function cartList(state = [], action) {
  let index;
  switch(action.type) {
    case 'SELECT_PRODUCT':
      index = getIndexById(state, action.productId);
      if(index === -1) {
        return [ ...state, { id: action.productId, quantity: 1 }];
      }
      return state
        .slice(0, index)
        .concat([{ id: action.productId, quantity: state[index].quantity+1 }])
        .concat(state.slice(index+1));
    case 'UNSELECT_PRODUCT':
      index = getIndexById(state, action.productId);
      if(index === -1) {
        return state;
      }
      if(state[index].quantity > 1) {
        return state
          .slice(0, index)
          .concat([{ id: action.productId, quantity: state[index].quantity-1 }])
          .concat(state.slice(index+1));
      }
      return state
        .slice(0, index)
        .concat(state.slice(index+1));
    case 'GET_PRODUCTS':
      return action.products.cartList;
    default:
      return state;
  }
}

export default cartList;
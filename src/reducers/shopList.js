/**
 * It's the reducer function which manage
 * the array of shop products like that :
 * [
 *   {
 *       id, title, cover, price
 *   }
 * ]
 *
 * @param {Array} state - The previous state
 * @param {Object} action
 * @param {String} action.type Description of what to do
 * @return {Array} The next state
 */
function shopList(state = [], action) {
  switch(action.type) {
    case 'CREATE_PRODUCT':
      return [{
        id    : action.id,
        title : action.title,
        price : action.price,
        cover : action.cover
      }, ...state ];
    case 'GET_PRODUCTS':
      return action.products.shopList;
    default:
      return state;
  }
}

export default shopList;
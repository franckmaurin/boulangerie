/**
 * Reducers
 * ---
 * State expected:
 * {
 *   shopList: [
 *     {
 *       id, title, cover, price
 *     }
 *   ],
 *   cartList: [
 *     { id, quantity }
 *   ],
 *   rooting: {
 *     ** created by react-router **
 *   }
 * }
 */

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import shopList from './shopList';
import cartList from './cartList';

export default combineReducers({
  shopList,
  cartList,
  routing
});
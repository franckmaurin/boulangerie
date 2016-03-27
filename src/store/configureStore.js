import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { getProducts } from '../actions';

export default function configureStore() {
  // Safari, in Private Browsing Mode, looks like it supports localStorage
  // but all calls to setItem throw QuotaExceededError.
  // We're going to detect this and just silently drop any calls to setItem
  // to avoid the entire page breaking, without having to do a check
  // at each usage of Storage.
  // https://gist.github.com/philfreo/68ea3cd980d72383c951
  if (typeof localStorage === 'object') {
    try {
      localStorage.setItem('localStorage', 1);
      localStorage.removeItem('localStorage');
    } catch (e) {
      Storage.prototype._setItem = Storage.prototype.setItem;
      Storage.prototype.setItem = function() {};
      alert('Your web browser does not support storing settings locally. '+
            'In Safari, the most common cause of this is using "Private ' +
            'Browsing Mode". Some settings may not save or some features '+
            'may not work properly for you.');
    }
  }

  /**
   * Synchronizes state with localstorage via the 'redux' item value.
   *
   * @param {Object} state
   * @return {Function}
   */
  function localStorageMiddleware({getState}) {
    return (next) => (action) => {
      const result = next(action);
      if(typeof localstorage !== 'undefined') {
        localStorage.setItem('redux', JSON.stringify(
          getState()
        ));
      }
      return result;
    };
  }

  const middleware = [ thunk ];
  const store = compose(
    applyMiddleware(
      localStorageMiddleware
    )
  )(createStore)(
    reducers,
    applyMiddleware(...middleware)
  );
  store.dispatch(getProducts());
  return store;
}
import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Cart from './components/Cart';
import Shop from './components/Shop';
import CreateForm from './components/CreateForm';

export default (
  <Route component={App}>
    <Route path="/" component={Shop} />
    <Route path="/cart" component={Cart} />
    <Route path="/create-product" component={CreateForm} />
  </Route>
);
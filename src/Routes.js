import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Cart from './Pages/Cart/Cart';
import SignUpDetail from './Pages/SignUpDetail/SignUpDetail';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/product-detail" component={ProductDetail} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-up-detail" component={SignUpDetail} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

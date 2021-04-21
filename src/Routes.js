import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Cart from './Pages/Cart/Cart';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

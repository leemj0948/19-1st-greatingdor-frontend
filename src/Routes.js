import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp/signUp';
import SignUpDetail from './Pages/SignUpDetail/SignUpDetail';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-up-detail" component={SignUpDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

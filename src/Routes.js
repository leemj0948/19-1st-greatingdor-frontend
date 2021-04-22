import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import SignUpDetail from './Pages/SignUpDetail/SignUpDetail';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-up-detail" component={SignUpDetail} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;

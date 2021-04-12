import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Pages/Login/login";
import SignUp from './Pages/SignUp/signUp';
import ProductDetail from "./Pages/ProductDetail/productDetail";
import Main from "./Pages/Main/Main";

export class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/product-detail" component={ProductDetail} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/sign-up" component={SignUp} />
                    <Route exact path="/main" component={Main} />
                </Switch>
            </Router>
        )
    }
}
export default Routes

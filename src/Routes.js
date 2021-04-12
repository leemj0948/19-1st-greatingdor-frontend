import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Pages/sp/Login/login";
import SignUp from './Pages/sp/SignUp/signUp';
import ProductDetail from "./Pages/se/productDetail/productDetail";
import Main from "./Pages/mj/Main/Main";

export class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <route>
                        <Route exact path="/product-detail" component={ProductDetail} />
                        <Route exact path="/login-in" component={Login} />
                        <Route exact path="/sign-up" component={SignUp} />
                        <Route exact path="/main" component={Main} />
                    </route>
                </Switch>
            </Router>
        )
    }
}

export default Routes

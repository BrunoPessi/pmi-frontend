import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

//css
import "./assets/styles/settings/colors.css"
import "./assets/styles/settings/fonts.css"
import "./assets/styles/reset.css"
import "bootstrap/dist/css/bootstrap.min.css"

//pages
import home from './views/home.js'
import Products from './views/products.js'

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/products" component={Products} />
    <Route path="/" component={home} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

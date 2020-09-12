import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

//css
import "./assets/styles/settings/colors.css"
import "./assets/styles/reset.css"

//pages
import home from './views/home.js'

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={home} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

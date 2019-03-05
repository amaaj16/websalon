import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import './Webfont/stylesheet.css';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Routing from './Routing.js';
import store from './redux/store.js';

const Root = (
  <Provider store={store}>
    <Router basename="/salon">
  <Switch>
    <Redirect from="/" to="/home"  exact/>
    <Routing/>
  </Switch>
  </Router>
  </Provider>
)
ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

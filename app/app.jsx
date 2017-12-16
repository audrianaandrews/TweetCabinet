var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

var TwitterAPI = require('TwitterAPI');
var actions = require('actions');

import TweetCabinetApp from 'TweetCabinetApp';
import AddTweet from 'AddTweet';
import Login from 'Login';
import Routes from 'Routes';

var firebaseApp= require('firebaseConfig');
import * as firebase from 'firebase/app';
import 'firebase/auth';

var store = require('configureStore').configure();

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

function PrivateRouteCabinet ({component: Component, authed}) {
  return (
    <Route
      render={(props) => authed === true
        ? <Component {...props} />
      : <Redirect to={{pathname: '/login',
        state: { from: props.location }}} />}
    />
  )
}

function PrivateRouteLogin ({component: Component, authed}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
      : <Redirect to={{pathname: '/cabinet',
        state: { from: props.location }}} />}
    />
  )
}

ReactDOM.render(

  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);

//

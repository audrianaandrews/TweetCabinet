var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var store = require('configureStore').configure();

var TweetCabinetApp = require('TweetCabinetApp');
// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
  <TweetCabinetApp/>
  </Provider>,
  document.getElementById('app')
);

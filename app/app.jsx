var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var TwitterAPI = require('TwitterAPI');
var actions = require('actions');

import TweetCabinetApp from 'TweetCabinetApp';


var store = require('configureStore').configure();

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
});

var initialTweets = TwitterAPI.getAllTweets();
store.dispatch(actions.addTweets(initialTweets));

var initialTags = TwitterAPI.getAllTags(initialTweets);
initialTags = TwitterAPI.sortTags(initialTags);
store.dispatch(actions.addTags(initialTags));

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

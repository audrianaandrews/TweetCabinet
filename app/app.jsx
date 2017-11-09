var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, browserHistory} = require('react-router');

var TwitterAPI = require('TwitterAPI');
var actions = require('actions');

import TweetCabinetApp from 'TweetCabinetApp';
import AddTweet from 'AddTweet';

var store = require('configureStore').configure();

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
});

//Set initial states
var initialTweets = TwitterAPI.getAllTweets();
store.dispatch(actions.addTweets(initialTweets));

var initialTags = TwitterAPI.getAllTags(initialTweets);
initialTags = TwitterAPI.sortTags(initialTags);
store.dispatch(actions.addTags(initialTags));

var filterText = TwitterAPI.getTweetFilter("");
store.dispatch(actions.filterTweets(filterText));

var user = TwitterAPI.setUser(null);
store.dispatch(actions.setUser(user));

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
         <Route path="/" component={TweetCabinetApp}></Route>
     </Router>
  </Provider>,
  document.getElementById('app')
);

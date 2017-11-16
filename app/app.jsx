var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

var TwitterAPI = require('TwitterAPI');
var actions = require('actions');

import TweetCabinetApp from 'TweetCabinetApp';
import AddTweet from 'AddTweet';
import Login from 'Login';

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

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
         <Route path="/" exact component={Login}/>
         <Route path="/cabinet" component={TweetCabinetApp}/>
        </div>
     </Router>
  </Provider>,
  document.getElementById('app')
);

//

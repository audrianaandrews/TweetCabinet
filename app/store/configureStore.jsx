//var  = require('redux');
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
var {tweetsReducer, tagsReducer, filterTextReducer, userReducer} = require('reducers');
var actions = require('actions');

export var configure = () =>{
  var reducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    filterText: filterTextReducer,
    user: userReducer
  });

  var store = createStore(reducer, {user: null}, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  store.dispatch(actions.verifyAuth());

  return store;
};

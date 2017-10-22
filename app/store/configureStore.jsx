//var  = require('redux');
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
var {tweetsReducer, tagsReducer} = require('reducers');

export var configure = () =>{
  var reducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer
  });

  var store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
};

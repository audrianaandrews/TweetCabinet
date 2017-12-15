//var  = require('redux');
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
var {tweetsReducer, tagsReducer, filterTextReducer, userReducer, allowGroupDeleteReducer} = require('reducers');
var actions = require('actions');

export var configure = () =>{
  var reducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    filterText: filterTextReducer,
    user: userReducer,
    allowGroupDelete: allowGroupDeleteReducer
  });

  var store = createStore(reducer, {user: false, allowGroupDelete:false}, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  store.dispatch(actions.verifyAuth());

  return store;
};

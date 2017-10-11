var redux = require('redux');
var {tweetsReducer, tagsReducer} = require('reducers');

export var configure = () =>{
  var reducer = redux.combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
};

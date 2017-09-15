var redux = require('redux');
var {searchTextReducer} = require('reducers');

export var configure = () =>{
  var reducer = redux.combineReducers({
    searchText: searchTextReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));


  return store;
};

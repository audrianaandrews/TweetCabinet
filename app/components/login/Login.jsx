//search for tweets by text or hashtag
var React = require('react');
var createReactClass = require('create-react-class');
var {connect} = require('react-redux');
var actions = require('actions');
var TwitterAPI = require('TwitterAPI');
import { Route } from 'react-router-dom';

export var Login = createReactClass({
  render: function () {
var {dispatch} = this.props;
    return (
        <div className="loginComponent ">
            <h1>Tweet Cabinet</h1>
            <button className="hollow button loginButton" onClick={
                () =>{
                  dispatch(actions.signInUser());
                }}>Log In with Twitter</button>
        </div>
    )
  }
});

export default connect()(Login);

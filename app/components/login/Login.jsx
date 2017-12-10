//search for tweets by text or hashtag
var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var TwitterAPI = require('TwitterAPI');
import { Route } from 'react-router-dom';

export var Login = React.createClass({
  render: function () {
var {dispatch} = this.props;
    return (
        <div>
            <button className="hollow button" onClick={
                () =>{
                  dispatch(actions.signInUser());
                }}>Log In with Twitter</button>
        </div>
    )
  }
});

export default connect()(Login);

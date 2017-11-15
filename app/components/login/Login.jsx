//search for tweets by text or hashtag
var React = require('react');
var firebaseApp = require('../../firebaseConfig');
import * as firebase from 'firebase/app';
import 'firebase/auth';
var {connect} = require('react-redux');
var actions = require('actions');
var TwitterAPI = require('TwitterAPI');
import { Route } from 'react-router-dom';

export var Login = React.createClass({
  login: function() {
    var provider = new firebase.auth.TwitterAuthProvider();
    var {dispatch} = this.props;

    firebaseApp.auth().signInWithPopup(provider).then(function(result) {
      var user = result.user
      TwitterAPI.setUser(user.uid);
      dispatch(actions.setUser(user.uid));
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
  },
  render: function () {
    return (
        <div>
            <button className="hollow button expanded" onClick={this.login}>Log In</button>
        </div>
    )
  }
});

export default connect()(Login);

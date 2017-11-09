var React = require('react');
var TweetSearch = require('TweetSearch');
var TwitterSignIn = require('TwitterSignIn');
var firebaseApp, {provider, auth} = require('../firebaseConfig');
import * as firebase from 'firebase/app';
import 'firebase/auth';

var {connect} = require('react-redux');
var actions = require('actions');

var TwitterAPI = require('TwitterAPI');
import MainTagList  from 'MainTagList';
import AddTweet from 'AddTweet';
import TweetList from 'TweetList';

const mapStateToProps = function (state) {
  return {
    tweets: state.tweets,
    tags: state.tags,
    filterText: state.filterText,
    user:state.user
  };
}

export var TweetCabinetApp = React.createClass({
  logout: function() {
  // we will add the code for this in a moment, but need to add the method now or the bind will throw an error
},
login: function() {
var provider = new firebase.auth.TwitterAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
  // You can use these server side with your app's credentials to access the Twitter API.
  var token = result.credential.accessToken;
  var secret = result.credential.secret;
  // The signed-in user info.
  var user = result.user;
  console.log(user);
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
},
  render: function () {
    var {dispatch} = this.props;
    return (
      <div className="row">
        <div className="columns small-12">
          <div className="row">
            <div className="columns medium-6">
              <h1>TweetCabinet</h1>
            </div>
            <div className="columns medium-6">
              <TweetSearch />
                {this.props.user ?
                  <button onClick={this.logout}>Log Out</button>
                  :
                  <button onClick={this.login}>Log In</button>
                }
            </div>
          </div>
        </div>
        <div className="columns medium-4">
          <AddTweet />
          <MainTagList/>
        </div>
        <div className="columns medium-8">
          <TweetList/>
        </div>
        <div className="columns medium-12">
          <button className="hollow button expanded" onClick={
              () =>{
                var currentTweets = TwitterAPI.groupDelete(this.props.tweets);
                dispatch(actions.addTweets(currentTweets));
                var currentTags = TwitterAPI.getAllTags(currentTweets);
                dispatch(actions.addTags(currentTags));
              }}>Deleted Selected</button>
        </div>
      </div>
    )
  }
});

export default connect(mapStateToProps)(TweetCabinetApp);

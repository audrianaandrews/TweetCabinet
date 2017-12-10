var React = require('react');
var firebaseApp, {provider, auth} = require('firebaseConfig');
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

  },
  render: function () {
    var {dispatch, user} = this.props;
    /*if(user == null){
      window.location="/"
    }*/

    return (
      <div className="row">
        <div className="columns small-12">
          <div className="row">
            <div className="columns medium-6">
              <h1>TweetCabinet</h1>
            </div>
            <div className="columns medium-6">
              <button onClick={
                  () =>{
                    dispatch(actions.signOutUser());
                    window.location.href="/";
                  }}>Log Out</button>
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
                var tweetsToDelete = TwitterAPI.groupDelete(this.props.tweets);
                tweetsToDelete.map((tweet) => {
                  dispatch(actions.deleteTags(tweet.tags));
                  dispatch(actions.deleteTweet(tweet.tweetId));
                });
              }}>Deleted Selected</button>
        </div>
      </div>
    )
  }
});

export default connect(mapStateToProps)(TweetCabinetApp);

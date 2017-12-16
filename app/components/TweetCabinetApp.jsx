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
    user:state.user,
    allowGroupDelete:state.allowGroupDelete
  };
}

export var TweetCabinetApp = React.createClass({

  render: function () {
    var {dispatch} = this.props;
    return (
      <div className="row">
        <div className="columns small-12 large-8 large-offset-2">
      <div className="row">
            <div className="columns medium-12 header">
              <h1>Tweet Cabinet</h1>
                <button className="logoutButton" onClick={
                    () =>{
                      dispatch(actions.signOutUser());
                      window.location.href="/";
                    }}>Log Out</button>
            </div>
        <hr/>
        <div className="columns medium-4">
            <h3>Tags</h3>
            <MainTagList/>
        </div>
        <div className="columns medium-8">
          <h2>Tweets</h2>
          <AddTweet />
          <hr />
          <TweetList/>

        </div>
      </div>
      <button className={this.props.allowGroupDelete ? 'button expanded groupDelete gdButton' : 'button expanded gdButton'} onClick={
          () =>{
            var tweetsToDelete = TwitterAPI.groupDelete(this.props.tweets);
            tweetsToDelete.map((tweet) => {
              dispatch(actions.deleteTags(tweet.tags));
              dispatch(actions.deleteTweet(tweet.tweetId));
            });
          }}>Delete Selected</button>
      </div>
      </div>
    )
  }
});

export default connect(mapStateToProps)(TweetCabinetApp);

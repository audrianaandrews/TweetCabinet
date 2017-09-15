var React = require('react');
var TweetSearch = require('TweetSearch');
var TwitterSignIn = require('TwitterSignIn');
var TagList = require('TagList');
var TweetList = require('TweetList');
var AddTweet = require('AddTweet');
var TwitterAPI = require('TwitterAPI');

var TweetCabinetApp = React.createClass({
  getInitialState: function () {
    return {
      tweets: TwitterAPI.getTweets()
    };
  },
  render: function () {
    var {tweets} = this.state;
    return (
      <div className="row">
        <div className="columns small-12">
          <div className="row">
            <div className="columns medium-4">
              <h1>TweetCabinet</h1>
            </div><div className="columns medium-4">
              <TweetSearch />
            </div><div className="columns medium-4">
              <TwitterSignIn />
            </div>
          </div>
        </div>
        <div className="columns medium-4">
          <AddTweet />
          <TagList />
        </div>
        <div className="columns medium-8">
          <TweetList tweets={this.state.tweets}/>
        </div>
      </div>
    )
  }
});

module.exports = TweetCabinetApp;

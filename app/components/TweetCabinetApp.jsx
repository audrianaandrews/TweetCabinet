var React = require('react');
var TweetSearch = require('TweetSearch');
var TwitterSignIn = require('TwitterSignIn');
var TagList = require('TagList');
var TweetList = require('TweetList');
var AddTweet = require('AddTweet');

var TweetCabinetApp = React.createClass({
  render: function () {

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
          <TweetList />
        </div>
      </div>
    )
  }
});

module.exports = TweetCabinetApp;

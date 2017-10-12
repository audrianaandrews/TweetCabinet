//display list of tweets, (timeline, likes, from folder)
var React = require('react');
var TweetContainer = require("TweetContainer");
var TwitterAPI = require('TwitterAPI');
var {connect} = require('react-redux');

export var TweetList = React.createClass({
  render: function () {
    var {tweets} = this.props;
    var renderTweets = () => {
      return tweets.map((tweet) => {
        return (
          <TweetContainer key={tweet.id} {...tweet} />
        );
      });
    };
    return (
        <div>
            <h2>Tweets:</h2>
            <ul>
              {renderTweets()}
            </ul>
        </div>
    )
  }
});

module.exports = TweetList;

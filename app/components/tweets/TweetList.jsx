//display list of tweets, (timeline, likes, from folder)
var React = require('react');
var TwitterAPI = require('TwitterAPI');
var {connect} = require('react-redux');

import TweetContainer from "TweetContainer";

export var TweetList = React.createClass({
  render: function () {
    var {tweets, tags, filterText} = this.props;
    var renderTweets = () => {
      return TwitterAPI.filterTweets(tweets, filterText).map((tweet) => {
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

//connect redux store to an individual component
export default connect(
  (state) => {
    return state;
  }
)(TweetList);

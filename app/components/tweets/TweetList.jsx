//display list of tweets, (timeline, likes, from folder)
var React = require('react');
var TwitterAPI = require('TwitterAPI');
var {connect} = require('react-redux');

import TweetContainer from "TweetContainer";

export var TweetList = React.createClass({
  getInitialState: function(){
      return {
          limit: 5,
          noGroupDelete: true
      }
  },
  onLoadMore() {
      this.setState({
          limit: this.state.limit + 5
      });
  },
  render: function () {
    var {tweets, tags, filterText} = this.props;
    var renderTweets = () => {
      return TwitterAPI.filterTweets(tweets, filterText).slice(0,this.state.limit).map((tweet) => {
        return (
          <TweetContainer key={+tweet.tweetId} {...tweet} groupDeletePressed={this.onGroupDelete}/>
        );
      });
    };
    return (
        <div className="tweetList">

            <ul>
              {renderTweets()}
            </ul>
            <div className="center">
            <button className="button" onClick={this.onLoadMore}>Load More</button>
            </div>
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

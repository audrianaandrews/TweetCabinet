//display list of tweets, (timeline, likes, from folder)
var React = require('react');
var TweetContainer = require("TweetContainer");
var TwitterAPI = require('TwitterAPI');

export var TweetList = React.createClass({
  getInitialState: function (){
    return {
      filteredTweets: []
    }
  },
  componentDidMount: function (){

    var {tweets} = this.props;
    var filteredTweets = TwitterAPI.filterTweets(tweets).then((data) =>{
      this.setState({
        filteredTweets: data
      });
    });
  },
  render: function () {
    var {filteredTweets} = this.state;
    var renderTweets = () => {
      return filteredTweets.map((tweet) => {
        return (
          <TweetContainer key={tweet.id} text={tweet.content}/>
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

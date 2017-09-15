//display list of tweets, (timeline, likes, from folder)
var React = require('react');

export var TweetList = React.createClass({
  render: function () {
    return (
        <div>
            <h2>Tweets:</h2>
            <ul>
              <li>Tweet 1</li>
              <li>Tweet 2</li>
            </ul>
        </div>
    )
  }
});

module.exports = TweetList;

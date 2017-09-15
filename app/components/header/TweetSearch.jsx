//search for tweets by text or hashtag
var React = require('react');

export var TweetSearch = React.createClass({
  render: function () {
    return (
        <div>
            <input type="search" ref="searchText" placeholder="Search tweets" />
        </div>
    )
  }
});

module.exports = TweetSearch;

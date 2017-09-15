//add new tweet to folder, form, tweet id and tags to add
var React = require('react');

export var AddTweet = React.createClass({
  render: function () {
    return (
        <div>
            <button className="button">Add Tweet</button>
        </div>
    )
  }
});

module.exports = AddTweet;

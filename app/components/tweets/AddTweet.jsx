//add new tweet to folder, form, tweet id and tags to add
var React = require('react');
var AddTweetModal = require('AddTweetModal');

export var AddTweet = React.createClass({
  addTweet: function (){
        <AddTweetModal/>
    },
  render: function () {
    return (
        <div>
            <button className="button" onClick={() => this.addTweet()}>Add Tweet</button>
        </div>
    )
  }
});

module.exports = AddTweet;

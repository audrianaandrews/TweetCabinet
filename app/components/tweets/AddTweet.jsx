//add new tweet to folder, form, tweet id and tags to add
var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var TwitterAPI = require('TwitterAPI');

export var AddTweet = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var tweetUrl = this.refs.tweetUrl.value;

    //add check for url
    if (tweetUrl.length > 0) {

      var tweetId = tweetUrl;
      var n = tweetId.lastIndexOf("/");
      var tweetId = tweetId.substr(n+1);
      tweetId = parseInt(tweetId);
      TwitterAPI.convertTweet(tweetUrl).then((content) =>{
          dispatch(actions.addTweet(content, tweetId));
          //this.refs.tweetUrl.value = '';
      });
    } else {
      this.refs.tweetUrl.focus();
    }
  },
  render: function () {
    return (
      <div className="row">
    <div className="columns small-12">
      <form onSubmit={this.handleSubmit}>
            <input type="text" ref="tweetUrl" placeholder="Paste tweet url"/>
            <button className="button">Add Tweet</button>
            </form>
          </div>
        </div>
    )
  }
});

export default connect()(AddTweet);

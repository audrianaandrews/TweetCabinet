//add new tweet to folder, form, tweet id and tags to add
var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var TwitterAPI = require('TwitterAPI');
var firebaseApp = require('firebaseConfig');
require('firebase/database');

export var AddTweet = React.createClass({
  getInitialState: function () {
      return {
          noError:true
      }
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch, tweets} = this.props;
    var tweetUrl = this.refs.tweetUrl.value;

    if (tweetUrl.length > 0 && tweetUrl.indexOf("status") != -1) {

      var beg = tweetUrl.lastIndexOf("status/") + 7;
      var statusStart = tweetUrl.substr(beg);
      var end = statusStart.indexOf("/");

      if(end != -1){
        var tweetId = statusStart.substring(0,end);
      }
      else {
        var tweetId = statusStart.substr(0);
      }

      var tweetExists = false;
      tweets.map((tweet) => {
        if(tweet.tweetId === tweetId){
          tweetExists = true;
        }
      })

      if(!tweetExists){
        dispatch(actions.addTweet(tweetId));
      }

      this.refs.tweetUrl.value = '';
    } else {
      this.refs.tweetUrl.focus();
      this.setState({
        noError: !this.state.noError
      });
      this.refs.tweetUrl.value = '';
    }
  },
  render: function () {
    return (
      <div className="row">
    <div className="columns small-12">
      <form onSubmit={this.handleSubmit}>
        <label>Paste tweet url to add a new tweet</label>
        <div className="input-group">

            <input type="text" className="input-group-field"  ref="tweetUrl" placeholder="e.g. https://twitter.com/Cherrell_Brown/status/940819680343875585"/>
            <div className="input-group-button">
            <button className="button"><i className="fa fa-plus" aria-hidden="true"></i></button>
            </div>
            </div>
            <small className={this.state.noError ? 'noError' : ''}>Please enter a valid url</small>

            </form>

          </div>
        </div>
    )
  }
});

export default connect((state) => {
  return {
    tweets: state.tweets
  }
})(AddTweet);

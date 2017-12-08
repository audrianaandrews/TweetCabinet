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
    var {dispatch} = this.props;
    var tweetUrl = this.refs.tweetUrl.value;

    //add check for url
    if (tweetUrl.length > 0 && tweetUrl.indexOf("status") != -1) {

      var tweetId = tweetUrl;
      var n = tweetId.lastIndexOf("/");
      var tweetId = tweetId.substr(n+1);
      dispatch(actions.addTweet(tweetId));
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
        <div>
            <input type="text" ref="tweetUrl" placeholder="Paste tweet url"/>
            <small className={this.state.noError ? 'noError' : ''}>Please enter a valid url</small>
            </div>
            <button className="button">Add Tweet</button>
            </form>

          </div>
        </div>
    )
  }
});

export default connect()(AddTweet);

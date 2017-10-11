var React = require('react');
var TweetSearch = require('TweetSearch');
var TwitterSignIn = require('TwitterSignIn');
var TagList = require('TagList');
var TweetList = require('TweetList');
var {connect} = require('react-redux');

import AddTweet from 'AddTweet';

var TwitterAPI = require('TwitterAPI');

var actions = require('actions');

const mapStateToProps = function (state) {
  return {
    tweets: state.tweets,
    tags: state.tags
  };
}

export var TweetCabinetApp = React.createClass({
  componentWillReceiveProps(nextProps) {
      this.setState({
        tweets: nextProps.tweets,
        tags: nextProps.tags
      });
    },
  render: function () {
    console.log(this.props.tweets);
    return (
      <div className="row">
        <div className="columns small-12">
          <div className="row">
            <div className="columns medium-4">
              <h1>TweetCabinet</h1>
            </div><div className="columns medium-4">
              <TweetSearch />
            </div><div className="columns medium-4">
              <TwitterSignIn />
            </div>
          </div>
        </div>
        <div className="columns medium-4">
          <AddTweet />
          <TagList tags={this.props.tags}/>
        </div>
        <div className="columns medium-8">
          <TweetList tweets={this.props.tweets}/>
        </div>
      </div>
    )
  }
});

export default connect(mapStateToProps)(TweetCabinetApp);

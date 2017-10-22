var React = require('react');
var TweetSearch = require('TweetSearch');
var TwitterSignIn = require('TwitterSignIn');
var TweetList = require('TweetList');
var {connect} = require('react-redux');
var actions = require('actions');

var TwitterAPI = require('TwitterAPI');
import MainTagList  from 'MainTagList';
import AddTweet from 'AddTweet';

const mapStateToProps = function (state) {
  return {
    tweets: state.tweets,
    tags: state.tags
  };
}

export var TweetCabinetApp = React.createClass({
  componentWillReceiveProps(nextProps) {
      var currentTweets = TwitterAPI.filterTweets(nextProps.tweets);

      this.setState({
        tweets: currentTweets,
        tags: nextProps.tags
      });
  },
  render: function () {
    var {dispatch} = this.props;
    return (
      <div className="row">
        <div className="columns small-12">
          <div className="row">
            <div className="columns medium-6">
              <h1>TweetCabinet</h1>
            </div>
            <div className="columns medium-6">
              <TweetSearch />
            </div>
          </div>
        </div>
        <div className="columns medium-4">
          <AddTweet />
          <MainTagList tags={this.props.tags}/>
        </div>
        <div className="columns medium-8">
          <TweetList tweets={this.props.tweets}/>
        </div>
        <div className="columns medium-12">
          <button className="hollow button expanded" onClick={
              () =>{
                var currentTweets = TwitterAPI.filterTweets(this.props.tweets);
                dispatch(actions.addTweets(currentTweets));
                var currentTags = TwitterAPI.getAllTags(currentTweets);
                dispatch(actions.addTags(currentTags));
              }}>Deleted Selected</button>
        </div>
      </div>
    )
  }
});

export default connect(mapStateToProps)(TweetCabinetApp);

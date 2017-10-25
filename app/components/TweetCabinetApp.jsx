var React = require('react');
var TweetSearch = require('TweetSearch');
var TwitterSignIn = require('TwitterSignIn');

var {connect} = require('react-redux');
var actions = require('actions');

var TwitterAPI = require('TwitterAPI');
import MainTagList  from 'MainTagList';
import AddTweet from 'AddTweet';
import TweetList from 'TweetList';

const mapStateToProps = function (state) {
  return {
    tweets: state.tweets,
    tags: state.tags,
    filterText: state.filterText
  };
}

export var TweetCabinetApp = React.createClass({
  componentWillReceiveProps(nextProps) {
      /*var currentTweets = TwitterAPI.filterTweets(nextProps.tweets, nextProps.filterText);
      var currentTags = TwitterAPI.sortTags(nextProps.tags);

      this.setState({
        tweets: currentTweets,
        tags: currentTags,
        filterText: nextProps.filterText
      });*/
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
          <MainTagList/>
        </div>
        <div className="columns medium-8">
          <TweetList/>
        </div>
        <div className="columns medium-12">
          <button className="hollow button expanded" onClick={
              () =>{
                var currentTweets = TwitterAPI.groupDelete(this.props.tweets);
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

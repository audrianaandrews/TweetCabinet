var React = require('react');
var TweetSearch = require('TweetSearch');
var TwitterSignIn = require('TwitterSignIn');
var TagList = require('TagList');
var TweetList = require('TweetList');
var {connect} = require('react-redux');
var actions = require('actions');

var TwitterAPI = require('TwitterAPI');
import AddTweet from 'AddTweet';

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
          <TagList tags={this.props.tags}/>
        </div>
        <div className="columns medium-8">
          <TweetList tweets={this.props.tweets}/>
        </div>
        <div className="columns medium-12">
          <button className="hollow button expanded"onClick={
              () =>{
                var currentTweets = TwitterAPI.filterTweets(this.props.tweets);
                dispatch(actions.addTweets(currentTweets));
              }}>Deleted Selected</button>
        </div>
      </div>
    )
  }
});

export default connect(mapStateToProps)(TweetCabinetApp);

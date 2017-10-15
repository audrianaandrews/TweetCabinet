//display tweet with tags and checkbox
var React = require('react');
var TagList = require("TagList");
var ReactDOMServer = require('react-dom/server');
var TwitterAPI = require('TwitterAPI');
var {connect} = require('react-redux');
var actions = require('actions');

export var TweetContainer = React.createClass({
  render: function () {
    var {content, tags, tweetId, dispatch} = this.props;
    return (
      <div>
        <input type="checkbox" />
        <li dangerouslySetInnerHTML={{__html: content}}></li>
        <button className="button" onClick={
            () =>{
              dispatch(actions.deleteTweet(tweetId));
            }}>X</button>
        <ul>
          <TagList tags={tags} />
          <input type="text" placeholder="Add Tags"/>
        </ul>
      </div>
    )
  }
});

export default connect()(TweetContainer);

//display tweet with tags and checkbox
var React = require('react');
import TagList from "TagList";
var ReactDOMServer = require('react-dom/server');
var TwitterAPI = require('TwitterAPI');
var {connect} = require('react-redux');
var actions = require('actions');
var uuid = require('node-uuid');
import { Tweet } from 'react-twitter-widgets';

export var TweetContainer = React.createClass({
  getInitialState: function () {
      return {
          groupDelete:this.props.groupDelete,
          noError:true
      }
  },
  render: function () {
    var {tags, tweetId, groupDelete, dispatch, tweets} = this.props;
    return (
      <div>
        <button className={this.state.groupDelete ? 'button' : 'button hollow'} onClick={
            () =>{
              this.setState({
                groupDelete: !this.state.groupDelete
              });
              dispatch(actions.toggleGroupDelete(tweetId));
            }}><i className="fa fa-check" aria-hidden="true"></i></button>
          <button className="button hollow" onClick={
        () =>{

          dispatch(actions.deleteTags(tags));
          dispatch(actions.deleteTweet(tweetId));
        }}>X</button>
      <Tweet tweetId={tweetId}/>
        <ul>
          <TagList tags={tags} tweetId={tweetId}/>
          <div>
          <input type="text" placeholder="Add Tags separated by a comma" ref="newTag" onChange={
              () => {
                var newTag = this.refs.newTag.value;
                if(newTag.slice(-1) == "," && newTag.length > 1){
                  newTag = newTag.replace(/,/g,"").toLowerCase();
                  var tagId = uuid();
                  var tagExists = false;
                  tags.map((tag) => {

                      if(tag.tagName == newTag){
                        tagExists = true;
                        this.setState({
                          noError: !this.state.noError
                        });
                      }
                  });

                  if(tagExists === false){
                    var isMainTag = false;

                    for (var i = 0; i < tweets.length; i++) {
                      var tweetTags = tweets[i].tags;
                      for (var j = 0; j < tweetTags.length; j++) {
                        if(tweetTags[j].tagName === newTag){
                          dispatch(actions.addTweetTag(tweetId, newTag, tweetTags[j].tagId));
                          isMainTag = true;
                          break;
                        }
                      }
                    }

                    if(!isMainTag){
                      console.log(tagId);
                      dispatch(actions.addTweetTag(tweetId, newTag, tagId));
                    }

                    dispatch(actions.addMainTag(tagId, newTag));

                  }

                  this.refs.newTag.value = "";
                }
              }
            }/>
          <small className={this.state.noError ? 'noError' : ''}>Please enter a valid tag</small>
            </div>
        </ul>
        <hr />
      </div>
    )
  }
});

export default connect((state) => {
  return {
    tweets: state.tweets
  }
})(TweetContainer);

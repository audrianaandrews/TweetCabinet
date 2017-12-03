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
          groupDelete:this.props.groupDelete
      }
  },
  componentDidMount: function() {
    //twttr.widgets.load()
  },
  render: function () {
    var {tags, tweetId, groupDelete, dispatch} = this.props;
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
          console.log(tweetId);
          dispatch(actions.deleteTweet(tweetId));
          dispatch(actions.deleteTags(tags));
        }}>X</button>
      <Tweet tweetId={tweetId}/>
        <ul>
          <TagList tags={tags} tweetId={tweetId}/>
          <input type="text" placeholder="Add Tags separated by a comma" ref="newTag" onChange={
              () => {
                var newTag = this.refs.newTag.value;
                if(newTag.slice(-1) == ","){
                  newTag = newTag.slice(0, newTag.length-1).toLowerCase();
                  var tagId = uuid();
                  var tagExists = false;
                  tags.map((tag) => {

                      if(tag.tagName == newTag){
                        tagExists = true;
                      }
                  });

                  if(tagExists === false){
                    dispatch(actions.addTweetTag(tweetId, newTag, tagId));
                    dispatch(actions.addMainTag(tagId, newTag));
                  }

                  this.refs.newTag.value = "";
                }
              }
            }/>
        </ul>
        <hr />
      </div>
    )
  }
});

export default connect()(TweetContainer);

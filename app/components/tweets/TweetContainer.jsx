//display tweet with tags and checkbox
var React = require('react');
import TagList from "TagList";
var ReactDOMServer = require('react-dom/server');
var TwitterAPI = require('TwitterAPI');
var {connect} = require('react-redux');
var actions = require('actions');
var uuid = require('node-uuid');

export var TweetContainer = React.createClass({
  getInitialState: function () {
      return {
          groupDelete:this.props.groupDelete
      }
  },
  componentDidMount: function() {
    twttr.widgets.load()
  },
  render: function () {
    var {content, tags, id, groupDelete, dispatch} = this.props;
    return (
      <div>
        <button className={this.state.groupDelete ? 'button' : 'button hollow'} onClick={
            () =>{
              this.setState({
                groupDelete: !this.state.groupDelete
              });
              dispatch(actions.toggleGroupDelete(id));
            }}><i className="fa fa-check" aria-hidden="true"></i></button>
          <button className="button hollow" onClick={
        () =>{
          dispatch(actions.deleteTweet(id));
          dispatch(actions.deleteTags(tags));
        }}>X</button>
          <div dangerouslySetInnerHTML={{__html: content}}></div>
        <ul>
          <TagList tags={tags} tweetId={id}/>
          <input type="text" placeholder="Add Tags" ref="newTag" onChange={
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
                    dispatch(actions.addTweetTag(id, newTag, tagId));
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

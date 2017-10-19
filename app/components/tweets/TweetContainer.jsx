//display tweet with tags and checkbox
var React = require('react');
var TagList = require("TagList");
var ReactDOMServer = require('react-dom/server');
var TwitterAPI = require('TwitterAPI');
var {connect} = require('react-redux');
var actions = require('actions');

export var TweetContainer = React.createClass({
  getInitialState: function () {
      return {
          groupDelete:this.props.groupDelete
      }
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
          <TagList tags={tags} />
          <input type="text" placeholder="Add Tags"/>
        </ul>
        <hr />
      </div>
    )
  }
});

export default connect()(TweetContainer);

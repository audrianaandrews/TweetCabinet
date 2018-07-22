//display the list of tags
var React = require('react');
var createReactClass = require('create-react-class');
import Tag from "Tag";
var actions = require('actions');
var {connect} = require('react-redux');

export var TagList = createReactClass({
  handleDeleteMainTag: function (tag) {
    var {dispatch, tags, tweetId} = this.props;
    dispatch(actions.deleteTags([tag.props]));
    dispatch(actions.updateTweetTags(tag.props.tagId, tweetId));
  },
  render: function () {
    var {tweets, tags, tweetId} = this.props;
    var renderTags = () => {

      return tags.map((tag) => {
        return (
          <li key={tag.tagId}>
            <Tag tagName={tag.tagName} handleDeleteMainTag={this.handleDeleteMainTag} {...tag}/>
          </li>
        );
      });
    };

    return (
        <div>
          <ul>
            {renderTags()}
          </ul>
        </div>
    )
  }
});

export default connect()(TagList);

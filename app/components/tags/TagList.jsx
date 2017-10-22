//display the list of tags
var React = require('react');
import Tag from "Tag";
var actions = require('actions');
var {connect} = require('react-redux');

export var TagList = React.createClass({
  handleDeleteMainTag: function (tag) {
    var {dispatch, tags, tweetId} = this.props;
    dispatch(actions.deleteTags([tag.props]));
    dispatch(actions.updateTweetTags(tag.props.id, tweetId));
  },
  render: function () {
    var {tweets, tags, tweetId} = this.props;
    var renderTags = () => {

      return tags.map((tag) => {
        return (
          <li>
            <Tag tagName={tag.tagName} key={tag.id} handleDeleteMainTag={this.handleDeleteMainTag} {...tag}/>
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

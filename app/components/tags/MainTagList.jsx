//display the list of tags
var React = require('react');
import MainTag from "MainTag";
var actions = require('actions');
var {connect} = require('react-redux');

export var MainTagList = React.createClass({
  render: function () {
    var {tags, dispatch} = this.props;
    var renderTags = () => {

      return tags.map((tag) => {
        return (
          <div>

          <li>
            <MainTag tag={tag.tagName} key={tag.tagId} {...tag}/>
          </li>
        </div>
        );
      });
    };

    return (
        <div>
          <h3>Tags</h3>
            <button onClick={() =>{
                dispatch(actions.filterTweets(""));
              }}>Reset</button>
          <ul>
            {renderTags()}
          </ul>
        </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(MainTagList);

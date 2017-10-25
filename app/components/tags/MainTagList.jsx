//display the list of tags
var React = require('react');
import MainTag from "MainTag";
var actions = require('actions');
var {connect} = require('react-redux');

export var MainTagList = React.createClass({
  render: function () {
    var {tags} = this.props;
    var renderTags = () => {

      return tags.map((tag) => {
        return (
          <li>
            <MainTag tag={tag.tagName} key={tag.id} {...tag}/>
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

export default connect(
  (state) => {
    return state;
  }
)(MainTagList);

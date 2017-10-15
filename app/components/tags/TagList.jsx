//display the list of tags
var React = require('react');
import Tag from "Tag";

export var TagList = React.createClass({
  render: function () {
    var {tags} = this.props;
    var renderTags = () => {

      return tags.map((tag) => {
        return (
          <li>
            <Tag tag={tag.tagName} key={tag.tagId}/>
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

module.exports = TagList;

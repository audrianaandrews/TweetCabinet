//display the list of tags
var React = require('react');
import MainTag from "MainTag";

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

module.exports = MainTagList;

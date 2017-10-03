//display the list of tags
var React = require('react');
var Tag = require("Tag");

export var TagList = React.createClass({
  render: function () {
    var {tags} = this.props;
    var renderTags = () => {
      var tagList = tags.split(",");

      return tagList.map((tag) => {
        return (
          <li>
            <Tag tag={tag}/>
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

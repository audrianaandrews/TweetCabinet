//display the list of tags
var React = require('react');
var Tag = require("Tag");
var uuid = require('node-uuid');

export var TagList = React.createClass({
  render: function () {
    var {tags} = this.props;
    var renderTags = () => {
      var tagList = tags.split(",");
      var tagId = uuid();

      return tagList.map((tag) => {
        return (
          <li>
            <Tag tag={tag} key={tagId}/>
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

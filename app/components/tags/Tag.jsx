//display tag, can edit, delete, when tag deleted make tweets uncategorized if no tags left
var React = require('react');

export var Tag = React.createClass({
  render: function () {
    return (
        <div>
            <p>Tag</p>
        </div>
    )
  }
});

module.exports = Tag;

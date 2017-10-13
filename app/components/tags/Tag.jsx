//display tag, can edit, delete, when tag deleted make tweets uncategorized if no tags left
var React = require('react');

export var Tag = React.createClass({
  render: function () {
    var {tag} = this.props;

    return (
            <p>{tag} <button>X</button></p>
    )
  }
});

module.exports = Tag;

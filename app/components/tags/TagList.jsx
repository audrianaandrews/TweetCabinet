//display the list of tags
var React = require('react');

export var TagList = React.createClass({
  render: function () {
    return (
        <div>
          <h2>Tags:</h2>
          <ul>
            <li>Tag 1</li>
            <li>Tag 2</li>
          </ul>
        </div>
    )
  }
});

module.exports = TagList;

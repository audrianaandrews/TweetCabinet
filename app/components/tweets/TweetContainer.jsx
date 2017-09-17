//display tweet with tags and checkbox
var React = require('react');

export var TweetContainer = React.createClass({
  render: function () {
    var {text} = this.props;
    return (
        <li dangerouslySetInnerHTML={{__html: text}}>
        </li>
    )
  }
});

module.exports = TweetContainer;

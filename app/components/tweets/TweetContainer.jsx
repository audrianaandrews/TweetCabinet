//display tweet with tags and checkbox
var React = require('react');
var TagList = require("TagList");
var ReactDOMServer = require('react-dom/server');
var TwitterAPI = require('TwitterAPI');

export var TweetContainer = React.createClass({
  render: function () {
    var {content, tags} = this.props;
    return (
      <div>
        <input type="checkbox" />
        <li dangerouslySetInnerHTML={{__html: content}}></li>
        <button className="button">X</button>
        <ul>
          <TagList tags={tags} />
        </ul>
      </div>
    )
  }
});

module.exports = TweetContainer;

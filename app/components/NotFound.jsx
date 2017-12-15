var React = require('react');
var {Link, IndexLink} = require('react-router-dom');

var NotFound = React.createClass({
  render:function(){
    return(
      <div>
        <h1>Page not found.</h1>
        <Link to="/" >Go back to your cabinet</Link>
      </div>
    )
  }
});

module.exports = NotFound;

var React = require('react');
var createReactClass = require('create-react-class');
var {Link, IndexLink} = require('react-router-dom');

export var NotFound = createReactClass({
  render:function(){
    return(
      <div>
        <h1>Page not found.</h1>
        <Link to="/" >Go back to your cabinet</Link>
      </div>
    )
  }
});

export default NotFound;

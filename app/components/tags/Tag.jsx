//display tag, can edit, delete, when tag deleted make tweets uncategorized if no tags left
var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');
var TwitterAPI = require('TwitterAPI');

export var Tag = React.createClass({
  deletePressed: function(e){
    this.props.handleDeleteMainTag(this);
  },
  render: function () {
    var {tagName, id, count} = this.props;

    return (
            <p>{tagName} <button onClick={() => {
                this.deletePressed();
              }}>X</button></p>
    )
  }
});

export default connect()(Tag);

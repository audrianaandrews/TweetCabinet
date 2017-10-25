//display tag, can edit, delete, when tag deleted make tweets uncategorized if no tags left
var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');

export var MainTag = React.createClass({
  render: function () {
    var {tag, id, count, dispatch} = this.props;

    return (
            <p><span onClick= {
              () => {
                dispatch(actions.filterTweets(tag));
              }}>{tag} ({count}) </span> <button onClick={
                () =>{
                  if(count == 1){
                    dispatch(actions.filterTweets(""));
                  }
                  dispatch(actions.deleteMainTag(id));
                  dispatch(actions.deleteTagFromTweets(id));
                }}>X</button></p>
    )
  }
});

export default connect()(MainTag);

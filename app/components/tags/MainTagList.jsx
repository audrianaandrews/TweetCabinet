//display the list of tags
var React = require('react');
var createReactClass = require('create-react-class');
import MainTag from "MainTag";
var actions = require('actions');
var {connect} = require('react-redux');

export var MainTagList = React.createClass({
  render: function () {
    var {tags, dispatch} = this.props;
    var renderTags = () => {

      return tags.map((tag) => {
        return (

          <li key={"m" + tag.tagId} className="mainTag">
            <MainTag tag={tag.tagName} {...tag}/>
          </li>
        );
      });
    };

    return (
        <div  className="tagBackground">
            <button className="tagReset" onClick={() =>{
                dispatch(actions.filterTweets(""));
              }}>Reset</button>
          <ul>
            {renderTags()}
          </ul>
        </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(MainTagList);

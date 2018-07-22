//display tag, can edit, delete, when tag deleted make tweets uncategorized if no tags left
var React = require('react');
var createReactClass = require('create-react-class');
var actions = require('actions');
var {connect} = require('react-redux');

export var MainTag = createReactClass({
  render: function () {
    var {tag, tagId, count, dispatch, tweets} = this.props;

    return (
            <div><span onClick= {
              () => {
                dispatch(actions.filterTweets(tag));
              }}>{tag} ({count}) </span> <button onClick={
                () =>{
                  if(count == 1){
                    dispatch(actions.filterTweets(""));
                  }
                  dispatch(actions.deleteMainTag(tagId));
                  tweets.map((tweet) =>{
                    tweet.tags.map((tag) => {
                      if(tag.tagId === tagId){
                        dispatch(actions.updateTweetTags(tag.tagId, tweet.tweetId));
                      }
                    });
                  });

                }}>X</button></div>
    )
  }
});

export default connect((state) => {
  return {
    tweets: state.tweets
  }
})(MainTag);

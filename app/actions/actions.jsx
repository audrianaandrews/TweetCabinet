export var addTweet = (content, tweetId) => {
  return {
    type: 'ADD_TWEET',
    content,
    tweetId
  };
};

export var deleteTweet = (id) => {
  return {
    type: 'DELETE_TWEET',
    id
  };
};

export var addTweets = (tweets) =>{
  return {
    type: 'ADD_TWEETS',
    tweets
  };
};

export var addTags = (tags) =>{
  return {
    type: 'ADD_TAGS',
    tags
  };
};

export var deleteTag = (tagId) => {
  return {
    type: 'DELETE_TAG',
    tagId
  };
};

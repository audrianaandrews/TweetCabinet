export var addTweet = (content, tweetId) => {
  return {
    type: 'ADD_TWEET',
    content,
    tweetId
  };
};

export var deleteTweet = (tweetId) => {
  return {
    type: 'DELETE_TWEET',
    tweetId
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

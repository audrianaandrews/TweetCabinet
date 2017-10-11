export var addTweet = (tweetUrl) => {
  return {
    type: 'ADD_TWEET',
    tweetUrl
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

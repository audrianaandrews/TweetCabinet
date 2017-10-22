export var addTweet = (content, id) => {
  return {
    type: 'ADD_TWEET',
    content,
    id
  };
};

export var deleteTweet = (id) => {
  return {
    type: 'DELETE_TWEET',
    id
  };
};

export var updateTweetTags = (id, tweetId) => {
  return {
    type: 'UPDATE_TWEET_TAGS',
    id,
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

export var deleteTags = (tags) =>{
  return {
    type: 'DELETE_TAGS',
    tags
  };
};

export var deleteTweetTag = (tag, tags) =>{
  return {
    type: 'DELETE_TWEET_TAG',
    tag,
    tags
  };
};

export var toggleGroupDelete = (id) => {
  return {
    type: 'TOGGLE_GROUP_DELETE',
    id
  };
};

export var deleteMainTag = (id) => {
  return {
    type: 'DELETE_MAIN_TAG',
    id
  };
};

export var deleteTagFromTweets = (id) => {
  return {
    type: 'DELETE_TAG_FROM_TWEETS',
    id
  };
};

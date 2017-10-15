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

export var toggleGroupDelete = (id) => {
  return {
    type: 'TOGGLE_GROUP_DELETE',
    id
  };
};

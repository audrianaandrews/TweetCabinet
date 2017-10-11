export var tweetsReducer = (state=[], action) => {
  switch(action.type){
    case 'ADD_TWEET':

      var tweetId = action.tweetUrl;
      var n = tweetId.lastIndexOf("/");
      var tweetId = tweetId.substr(n+1);
      tweetId = parseInt(tweetId);
      return [
        ...state,
        {
          id: tweetId,
          content:action.tweetUrl,
          tags:"",
        }
      ];
      case 'ADD_TWEETS':
        return [
          ...state,
          ...action.tweets
        ];
      default:
        return state;
    }
}

export var tagsReducer = (state=[], action) => {
  switch(action.type){
      case 'ADD_TAGS':
        return action.tags;
      default:
        return state;
    }
}

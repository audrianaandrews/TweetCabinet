export var tweetsReducer = (state=[], action) => {
  switch(action.type){
    case 'ADD_TWEET':

      return [
        ...state,
        {
          id: action.tweetId,
          content:action.content,
          tags:"",
        }
      ];
      case 'ADD_TWEETS':
        return [
          ...state,
          ...action.tweets
        ];
      case 'DELETE_TWEET':
      var tweetToDelete = 0;

      state.map((tweet) => {
        if(tweet.id === action.tweetId){
          tweetToDelete = tweet.id;
        }
      });
      state.splice(tweetToDelete, 1);

      return [
        ...state
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

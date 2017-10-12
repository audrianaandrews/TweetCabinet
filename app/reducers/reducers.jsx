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

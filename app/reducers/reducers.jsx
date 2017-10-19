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
          ...action.tweets
        ];
      case 'DELETE_TWEET':
        var tweetToDelete = 0;
        state.map((tweet, index) => {
          if(tweet.id === action.id){
            tweetToDelete = index;
          }
        });
        state.splice(tweetToDelete, 1);

        return [
          ...state
        ];
      case 'TOGGLE_GROUP_DELETE':
        return state.map((tweet) => {
          if(tweet.id === action.id){
            var groupDelete = !tweet.groupDelete;

            return {
              id: tweet.id,
              content:tweet.content,
              tags: tweet.tags,
              groupDelete: groupDelete
            };
          } else {
            return tweet
          }
        });
      default:
        return state;
    }
}

export var tagsReducer = (state=[], action) => {
  switch(action.type){
      case 'ADD_TAGS':
        return action.tags;
      case 'DELETE_TAG':
        var tagToDelete = 0;

        state.map((tag) => {
          if(tag.id === action.id){
            tagToDelete = tag.id;
          }
        });
        state.splice(tagToDelete, 1);

        return [
          ...state
        ];
        case 'DELETE_TAGS':
          var tagsLeft = [];
          console.log(state);

          state.map((tag, index) => {
            action.tags.map((deleteTag) => {
              if(tag.tagName == deleteTag.tagName){
                tag.count--;
              }
            });
            if(tag.count != 0){
              tagsLeft.push(tag);
            }
          });

          return tagsLeft;
      default:
        return state;
    }
}

export var tweetsReducer = (state=[], action) => {
  switch(action.type){
    case 'ADD_TWEET':
      return [
        {
          tweetId:action.tweetId,
          tags:[],
          groupDelete:false,
          createdAt: action.dateAdded
        },
        ...state
      ];
      case 'ADD_TWEETS':
        return [
          ...action.tweets
        ];
      case 'UPDATE_TWEET_TAGS':
        var tagToDelete = 0;
        state.map((tweet) => {
          if(tweet.tweetId === action.tweetId){
            tweet.tags.map((tag, index) => {
              if(tag.tagId === action.tagId){
                tagToDelete = index;
              }
            });
            tweet.tags.splice(tagToDelete, 1);
          }
        });
        return [
          ...state
        ];
      case 'DELETE_TWEET':
        var tweetToDelete = 0;
        state.map((tweet, index) => {
          if(tweet.tweetId === action.tweetId){
            tweetToDelete = index;
          }
        });
        state.splice(tweetToDelete, 1);

        return [
          ...state
        ];
      case 'TOGGLE_GROUP_DELETE':
        return state.map((tweet) => {
          if(tweet.tweetId === action.tweetId){
            var groupDelete = !tweet.groupDelete;

            return {
              tweetId: tweet.tweetId,
              tags: tweet.tags,
              groupDelete: groupDelete
            };
          } else {
            return tweet
          }
        });
      case 'DELETE_TAG_FROM_TWEETS':
        state.map((tweet) => {
          var tagToDelete = null;

          tweet.tags.map((tag, index) => {
            if(tag.tagId === action.tagId){
              tagToDelete = index;
              console.log(tagToDelete);
            }
          });

          if(tagToDelete != null){
            tweet.tags.splice(tagToDelete, 1);
          }
        });
        return state;
      case 'ADD_TWEET_TAG':
        state.map((tweet) => {
          if(tweet.tweetId === action.tweetId){
            tweet.tags.push({
                tagId: action.tagId,
                tagName: action.text
            });
          }
        });
        return [...state];
      default:
        return state;
    }
}

export var tagsReducer = (state=[], action) => {
  switch(action.type){
    case 'ADD_MAIN_TAG':
      var tagExists = false;
      var tagText = action.text.toLowerCase();

      state.map((tag) => {
        if(tag.tagName === tagText){
          tag.count++;
          tagExists = true;
        }
      });

      if(tagExists != true){
        state.push({
          id: action.tagId,
          tagName: tagText,
          count: 1
        });
      }
      return [...state]
      case 'ADD_TAGS':
        return action.tags;
      case 'DELETE_TWEET_TAG':
        state.map((tag) => {
          if(tag.id === action.tagId){
            tag.count--;
          }
        });

        return [
          ...state
        ];
      case 'DELETE_TAGS':
        var tagsLeft = [];

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

        return [...tagsLeft];
      case 'DELETE_MAIN_TAG':
        var tagToDelete = 0;
        state.map((tag, index) => {
          if(tag.tagId === action.tagId){
            tagToDelete = index;
          }
        });
        state.splice(tagToDelete, 1);

        return [
          ...state
        ];
      default:
        return state;
    }
}

export var filterTextReducer = (state="", action) => {
   switch(action.type){
      case 'FILTER_TWEETS':
        return action.filterText
      default:
            return state;
        }
}

export var userReducer = (state=false, action) => {
   switch(action.type){
      case 'SET_USER':
        return true
      case 'SIGN_OUT_USER':
        return false;
      default:
            return state;
        }
}

export var allowGroupDeleteReducer = (state=false, action) => {
   switch(action.type){
      case 'ALLOW_GROUP_DELETE':
        return action.allowGroupDelete
      default:
            return state;
        }
}

var firebaseApp= require('firebaseConfig');
import * as firebase from 'firebase/app';
import 'firebase/auth';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';

/***Tweet Actions***/
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

export var addTweetTag = (tweetId, text, tagId) =>{
  return {
    type: 'ADD_TWEET_TAG',
    tweetId,
    text,
    tagId
  };
};

/***Tag Actions***/

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

export var addMainTag = (tagId, text) => {
  return {
    type: 'ADD_MAIN_TAG',
    tagId,
    text
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

/***Filter Actions***/
export var filterTweets = (filterText) => {
  return {
    type: 'FILTER_TWEETS',
    filterText
  };
};

/**User Reducer**/
export function setUser(id) {
  return {
    type: 'SET_USER',
    id
  }
}

export function signInUser() {
    return function(dispatch) {
        var provider = new firebase.auth.TwitterAuthProvider();
        firebaseApp.auth().signInWithPopup(provider)
        .then(function(result) {
            var user = result.user
            dispatch(setUser(user.uid));
            window.location.href="/cabinet";
          })
            .catch(error => {
                console.log(error);
            });
    }
}

export function signOutUser() {
  return function (dispatch) {
      firebaseApp.auth().signOut()
          .then(() =>{
              dispatch({
                  type: 'SIGN_OUT_USER'
              });
          });
  }
}

export function verifyAuth() {
    return function (dispatch) {
        firebaseApp.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(setUser(user.uid));
            } else {
                dispatch(signOutUser());
                //window.location="/login"
            }
        });
    }
}

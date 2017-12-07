var firebaseApp= require('firebaseConfig');
import * as firebase from 'firebase/app';
import 'firebase/auth';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';
var TwitterAPI = require('TwitterAPI');

/***Tweet Actions***/
export function addTweet(tweetId){
  /*return {
    type: 'ADD_TWEET',
    tweetId
  }*/
  return function(dispatch) {
    var user = firebase.auth().currentUser;
    var newTweet = {
      tags: [],
      groupDelete: false
    };
    firebaseApp.database().ref('users/' + user.uid + "/tweets/" + tweetId).set(
      newTweet
    )
        .then(() =>{
            dispatch({
              type: 'ADD_TWEET',
              tweetId
            });
        })
        .catch(error => {
            console.log(error);
        });
  }
}

export var deleteTweet = (tweetId) => {
  /*return {
    type: 'DELETE_TWEET',
    tweetId
  };*/
  return function(dispatch) {
  var user = firebase.auth().currentUser;
  firebaseApp.database().ref('users/' + user.uid + "/tweets/").child(tweetId).remove()
      .then(() =>{
          dispatch({
            type: 'DELETE_TWEET',
            tweetId
          });
      })
      .catch(error => {
          console.log(error);
      });
    }
};

export var updateTweetTags = (tagId, tweetId) => {
  return {
    type: 'UPDATE_TWEET_TAGS',
    tagId,
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
  /*return {
    type: 'ADD_TWEET_TAG',
    tweetId,
    text,
    tagId
  };*/
  return function(dispatch) {
    var user = firebase.auth().currentUser;
    var newTag = {
        tagName: text
    };
    firebaseApp.database().ref('users/' + user.uid + "/tweets/" + tweetId+ "/tags/").child(tagId).set(
      newTag
    )
        .then(() =>{
            dispatch({
              type: 'ADD_TWEET_TAG',
              tweetId,
              text,
              tagId
            });
        })
        .catch(error => {
            console.log(error);
        });
  }
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

export var toggleGroupDelete = (tweetId) => {
  return {
    type: 'TOGGLE_GROUP_DELETE',
    tweetId
  };
};

export var addMainTag = (tagId, text) => {
  return {
    type: 'ADD_MAIN_TAG',
    tagId,
    text
  };
};

export var deleteMainTag = (tagId) => {
  return {
    type: 'DELETE_MAIN_TAG',
    tagId
  };
};

export var deleteTagFromTweets = (tagId) => {
  return {
    type: 'DELETE_TAG_FROM_TWEETS',
    tagId
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
export function setUser() {
  return {
    type: 'SET_USER'
  }
}

export function signInUser() {
    return function(dispatch) {
        var provider = new firebase.auth.TwitterAuthProvider();
        firebaseApp.auth().signInWithPopup(provider)
        .then(function(result) {
            var user = result.user
            dispatch(setUser());

            //window.href ="/cabinet";
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
                dispatch(setUser());

                var initialTweets = TwitterAPI.getAllTweets();

                initialTweets.then(function(res){
                console.log(res);
                dispatch(addTweets(res));

                var initialTags = TwitterAPI.getAllTags(res);
                initialTags = TwitterAPI.sortTags(initialTags);
                dispatch(addTags(initialTags));

                var filterText = TwitterAPI.getTweetFilter("");
                dispatch(filterTweets(filterText));

              });
            } else {
                dispatch(signOutUser());
                //window.location="/login"
            }
        });
    }
}

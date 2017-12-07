var $ = require('jquery');
var axios = require('axios');
var firebaseApp= require('firebaseConfig');
import * as firebase from 'firebase/app';
import 'firebase/auth';

module.exports = {
  getAllTags: function(tweets){
    var tags = [];

    //go through tweets and take out all the tags and add them to a tags list
    tweets.map((tweet) => {
      tweet.tags.map((tag) =>{
        var tagExists = false;

        tags.map((allTag) =>{
          if(tag.tagName == allTag.tagName){
            tagExists = true;
            allTag.count++;
          }
        })

        if(tagExists == false){
          tags.push({
            tagId: tag.tagId,
            tagName: tag.tagName.toLowerCase(),
            count: 1
          });
        }
      });

    });

    return tags;
  },
  sortTags: function(tags){
    tags.sort(function(a, b) {
        return a.tagName.localeCompare(b.tagName);
    });
    return tags;
  },
  getAllTweets: function(){
    var user = firebase.auth().currentUser;

    return firebase.database().ref('users/' + user.uid + '/tweets').once('value').then(function(snapshot) {
      var tweetData = snapshot.val();
      var tweetKeys = Object.keys(snapshot.val());
      var userTweets = [];
      tweetKeys.map((tweetId) => {
        var tags = []
        var tagData = tweetData[tweetId].tags;
        if (tagData){
          var tagKeys = Object.keys(tagData);
          tagKeys.map((tagId) => {
            tags.push({
              tagId,
              tagName: tagData[tagId].tagName
            });
          });
        }


        userTweets.push({
          tweetId,
          tags,
          groupDelete: false
        })
      });

      return userTweets;
    });
  },
  getTweetFilter: function(filterText){
    return filterText;
  },
  groupDelete: function(tweets){
    var currentTweets = tweets;
    currentTweets = currentTweets.filter((tweet) => {
      return !tweet.groupDelete;
    });
    return currentTweets;
  },
  filterTweets: function(tweets, filterText){
    var currentTweets = tweets;

    currentTweets.map((tweet) => {
      var newTags = [];
      tweet.tags.map((tag) => {
        newTags.push(tag);
      });
      tweet.tags = newTags;
    });

    if(filterText != ""){
      currentTweets = currentTweets.filter((tweet) => {
        var tagExists = false;

        tweet.tags.map((tag) => {
          if(tag.tagName === filterText){
            tagExists = true;
          }
        });
        return tagExists;
      });
    }

    return currentTweets;
  }
};

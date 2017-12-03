var $ = require('jquery');
var axios = require('axios');
var firebaseApp = require('firebaseConfig');
require('firebase/database');

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
    var tweets = [
      {
        tweetId:"908511525417242624",
        tags: [
          {
            tagId: 1,
            tagName:"job",
            count: 1
          }, {
            tagId: 2,
            tagName:"interview",
            count: 1
          },
          {
            tagId: 7,
            tagName:"funny",
            count: 2
          }],
        groupDelete: false
      },
      {
        tweetId:"912749648300986368",
        tags: [
          {
            tagId: 3,
            tagName:"rap",
            count: 1
          },
          {
            tagId: 4,
            tagName:"awkward black girl",
            count: 1
          },
          {
            tagId: 5,
            tagName:"issarae",
            count: 1
          },
          {
            tagId: 7,
            tagName:"funny",
            count: 2
          }],
        groupDelete: false
      },
      {
        tweetId:"909765000184639489",
        tags:[
          {
            tagId: 6,
            tagName:"minions art"
          }],
        groupDelete: false
      }
    ];
    return tweets;
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

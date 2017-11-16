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
            id: tag.id,
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
        id:908511525417242624,
        content:`<blockquote class='twitter-tweet'><p lang=\"en\" dir=\"ltr\"\u003EWho the fuck stands in line for a job interview? \u003Ca href=\"https:\/\/t.co\/4Phf8QoKKS\"\u003Ehttps:\/\/t.co\/4Phf8QoKKS\u003C\/a\u003E\u003C\/p\u003E&mdash; Hoodie Melo (@Word2MyYankees) \u003Ca href=\"https:\/\/twitter.com\/Word2MyYankees\/status\/908511525417242624?ref_src=twsrc%5Etfw\"\u003ESeptember 15, 2017\u003C\/a></blockquote>`,
        tags: [
          {
            id: 1,
            tagName:"job"
          }, {
            id: 2,
            tagName:"interview"
          },
          {
            id: 7,
            tagName:"funny"
          }],
        groupDelete: false
      },
      {
        id:912749648300986368,
        content:`\u003Cblockquote class=\"twitter-tweet\"\u003E\u003Cp lang=\"en\" dir=\"ltr\"\u003EHad to do it with my girl, \u003Ca href=\"https:\/\/twitter.com\/MoreReginaHall?ref_src=twsrc%5Etfw\"\u003E@MoreReginaHall\u003C\/a\u003E.\u003Ca href=\"https:\/\/twitter.com\/hashtag\/ForTheDChallenge?src=hash&amp;ref_src=twsrc%5Etfw\"\u003E#ForTheDChallenge\u003C\/a\u003E \u003Ca href=\"https:\/\/t.co\/nlRafF6dLC\"\u003Epic.twitter.com\/nlRafF6dLC\u003C\/a\u003E\u003C\/p\u003E&mdash; Issa Rae (@IssaRae) \u003Ca href=\"https:\/\/twitter.com\/IssaRae\/status\/912749648300986368?ref_src=twsrc%5Etfw\"\u003ESeptember 26, 2017\u003C\/a\u003E\u003C\/blockquote\u003E`,
        tags: [
          {
            id: 3,
            tagName:"rap"
          },
          {
            id: 4,
            tagName:"awkward black girl"
          },
          {
            id: 5,
            tagName:"issarae"
          },
          {
            id: 7,
            tagName:"funny"
          }],
        groupDelete: false
      },
      {
        id:909765000184639489,
        content:`\u003Cblockquote class=\"twitter-tweet\"\u003E\u003Cp lang=\"en\" dir=\"ltr\"\u003EAdding custom colors using RGB channels of a mask, shader code in first reply! \u003Ca href=\"https:\/\/twitter.com\/hashtag\/gamedev?src=hash&amp;ref_src=twsrc%5Etfw\"\u003E#gamedev\u003C\/a\u003E \u003Ca href=\"https:\/\/twitter.com\/hashtag\/tutorial?src=hash&amp;ref_src=twsrc%5Etfw\"\u003E#tutorial\u003C\/a\u003E \u003Ca href=\"https:\/\/twitter.com\/hashtag\/unity3d?src=hash&amp;ref_src=twsrc%5Etfw\"\u003E#unity3d\u003C\/a\u003E\u003Cbr\u003EMore &gt; \u003Ca href=\"https:\/\/t.co\/FqAsMb9Plg\"\u003Ehttps:\/\/t.co\/FqAsMb9Plg\u003C\/a\u003E \u003Ca href=\"https:\/\/t.co\/UlLNbBEzQm\"\u003Epic.twitter.com\/UlLNbBEzQm\u003C\/a\u003E\u003C\/p\u003E&mdash; Joyce[MinionsArt] (@minionsart) \u003Ca href=\"https:\/\/twitter.com\/minionsart\/status\/909765000184639489?ref_src=twsrc%5Etfw\"\u003ESeptember 18, 2017\u003C\/a\u003E\u003C\/blockquote\u003E`,
        tags:[
          {
            id: 6,
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
  },
  convertTweet: function(tweetUrl){
    var configs = {
        headers: {'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'}
    };
    const OEMBEDURL = "https://publish.twitter.com/oembed?url=";
    var encodedTweet = encodeURIComponent(tweetUrl);
    var fullURL = `${OEMBEDURL}${encodedTweet}`;

    return axios.get(fullURL, configs).then((res) => {
      return res.data.html;
    });
  }
  /*setUser: function(userId){
    firebaseApp.database().ref('users/').set({
      userId
    });

    return userId;
  }*/
};

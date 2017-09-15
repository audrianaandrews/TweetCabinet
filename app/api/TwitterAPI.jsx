var $ = require('jquery');

module.exports ={
  getTweets: function(){
    var tweets = "908477983828013056,908426053214912512";

    return tweets;
  },
  filterTweets: function(tweets){
    
    return tweets.split(",");
  }
};

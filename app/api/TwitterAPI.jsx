var $ = require('jquery');
var axios = require('axios');

module.exports ={
  getTweets: function(){
    var tweets = [
      {
        id:1,
        content:"https://twitter.com/RosemaryNKnight/status/909118467814674433"
      },
      {
        id:2,
        content:"https://twitter.com/OnlyWomenCheat/status/908511525417242624"
      }];
    return tweets;
  },
  filterTweets: function(tweets){
    var oEmbedTweets = [];
    var axiosCalls = [];
    const OEMBEDURL = "https://publish.twitter.com/oembed?url=";
    tweets.map((tweet) => {
      var encodedTweet = encodeURIComponent(tweet.content);
      var fullURL = `${OEMBEDURL}${encodedTweet}`;
        axiosCalls.push(axios.get(fullURL).then((res) => {
          var htmlTweet = {id:tweet.id, content: res.data.html};
          return htmlTweet;
        }))
    });

    return axios.all(axiosCalls)
    .then((res) => {
        res.forEach((data =>{
          oEmbedTweets.push(data);
        }));
      return oEmbedTweets;
    });
  }
};

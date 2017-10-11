var $ = require('jquery');
var axios = require('axios');

module.exports = {
  getTags: function(tweets){
    var tags = "";

    tweets.map((tweet) => {
      tags += tweet.tags + ",";
    });
    tags = tags.slice(0, -1);
    return tags;
  },
  getTweets: function(){
    var tweets = [
      {
        id:908511525417242624,
        content:"https://twitter.com/OnlyWomenCheat/status/908511525417242624",
        tags: "job, interview"
      },
      {
        id:912749648300986368,
        content:"https://twitter.com/IssaRae/status/912749648300986368",
        tags: "rap,award black girl,IssaRae"
      },
      {
        id:909765000184639489,
        content:"https://twitter.com/minionsart/status/909765000184639489",
        tags:"minions art"
      }
    ];
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
          var htmlTweet = {id:tweet.id, content: res.data.html, tags:tweet.tags};
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

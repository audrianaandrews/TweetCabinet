var $ = require('jquery');
var axios = require('axios');

module.exports = {
  getAllTags: function(tweets){
    var tags = [];

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
            tagName: tag.tagName,
            count: 1
          });
        }
      });

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
            tagId: 1,
            tagName:"job"
          }, {
            tagId: 2,
            tagName:"interview"
          },
          {
            tagId: 7,
            tagName:"funny"
          }],
        groupDelete: false
      },
      {
        id:912749648300986368,
        content:`\u003Cblockquote class=\"twitter-tweet\"\u003E\u003Cp lang=\"en\" dir=\"ltr\"\u003EHad to do it with my girl, \u003Ca href=\"https:\/\/twitter.com\/MoreReginaHall?ref_src=twsrc%5Etfw\"\u003E@MoreReginaHall\u003C\/a\u003E.\u003Ca href=\"https:\/\/twitter.com\/hashtag\/ForTheDChallenge?src=hash&amp;ref_src=twsrc%5Etfw\"\u003E#ForTheDChallenge\u003C\/a\u003E \u003Ca href=\"https:\/\/t.co\/nlRafF6dLC\"\u003Epic.twitter.com\/nlRafF6dLC\u003C\/a\u003E\u003C\/p\u003E&mdash; Issa Rae (@IssaRae) \u003Ca href=\"https:\/\/twitter.com\/IssaRae\/status\/912749648300986368?ref_src=twsrc%5Etfw\"\u003ESeptember 26, 2017\u003C\/a\u003E\u003C\/blockquote\u003E`,
        tags: [
          {
            tagId: 3,
            tagName:"rap"
          },
          {
            tagId: 4,
            tagName:"award black girl"
          },
          {
            tagId: 5,
            tagName:"IssaRae"
          },
          {
            tagId: 7,
            tagName:"funny"
          }],
        groupDelete: false
      },
      {
        id:909765000184639489,
        content:`\u003Cblockquote class=\"twitter-tweet\"\u003E\u003Cp lang=\"en\" dir=\"ltr\"\u003EAdding custom colors using RGB channels of a mask, shader code in first reply! \u003Ca href=\"https:\/\/twitter.com\/hashtag\/gamedev?src=hash&amp;ref_src=twsrc%5Etfw\"\u003E#gamedev\u003C\/a\u003E \u003Ca href=\"https:\/\/twitter.com\/hashtag\/tutorial?src=hash&amp;ref_src=twsrc%5Etfw\"\u003E#tutorial\u003C\/a\u003E \u003Ca href=\"https:\/\/twitter.com\/hashtag\/unity3d?src=hash&amp;ref_src=twsrc%5Etfw\"\u003E#unity3d\u003C\/a\u003E\u003Cbr\u003EMore &gt; \u003Ca href=\"https:\/\/t.co\/FqAsMb9Plg\"\u003Ehttps:\/\/t.co\/FqAsMb9Plg\u003C\/a\u003E \u003Ca href=\"https:\/\/t.co\/UlLNbBEzQm\"\u003Epic.twitter.com\/UlLNbBEzQm\u003C\/a\u003E\u003C\/p\u003E&mdash; Joyce[MinionsArt] (@minionsart) \u003Ca href=\"https:\/\/twitter.com\/minionsart\/status\/909765000184639489?ref_src=twsrc%5Etfw\"\u003ESeptember 18, 2017\u003C\/a\u003E\u003C\/blockquote\u003E`,
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
  },
  convertTweet: function(tweetUrl){
    const OEMBEDURL = "https://publish.twitter.com/oembed?url=";
    var encodedTweet = encodeURIComponent(tweetUrl);
    var fullURL = `${OEMBEDURL}${encodedTweet}`;

    return axios.get(fullURL).then((res) => {
      return res.data.html;
    });
  }
};

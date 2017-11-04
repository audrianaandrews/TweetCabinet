var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
const app = express();
/*twitterConfig = require("./TwitterCredentials"),
twitter = require('twitter');*/

//var twit = new twitter(twitterConfig.TwitterCredentials);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//Add a tweet
router.post('/tweet', (req, res, next) => {
    console.log("Worked!");
})


module.exports = router;

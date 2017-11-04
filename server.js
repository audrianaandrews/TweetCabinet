var express = require('express'),
index = require('./routes/index'),
tweetRoutes = require('./routes/twitter');
const bodyParser= require('body-parser');
var path = require('path');
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
// Create our app
var app = express();
var session = require('express-session');

var twitterConfig = require("./TwitterCredentials")
const PORT = process.env.PORT || 3000;

//app.use(express.cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(session({ secret: 'SECRET' })); // session secret
app.use(passport.initialize());
app.use(passport.session());

// Set /public as our static content dir
app.use("/", express.static(path.join(__dirname, 'public')));

// Index Route
//app.use('/', index);


passport.use(new TwitterStrategy({
    consumerKey: twitterConfig.TwitterCredentials.consumer_key,
    consumerSecret: twitterConfig.TwitterCredentials.consumer_secret,
    callbackURL: "http://localhost:7000/login/twitter/return"
  },
  function(token, tokenSecret, profile, cb) {
    console.log(profile);
    return cb(null, profile);
    //profile.id == profile id
    /*User.findOrCreate({ twitterId: profile.id }, function (err, user) {
      console.log(user);
      return cb(err, user);
    });*/
  }
));

app.get('/login/twitter',
  passport.authenticate('twitter'));

app.get('/login/twitter/return',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });
  passport.serializeUser(function(user, done) {
      done(null, user.id);
  });

  passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});

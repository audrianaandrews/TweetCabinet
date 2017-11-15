var express = require('express');
const bodyParser= require('body-parser');
var path = require('path');

// Create our app
var app = express();

const PORT = process.env.PORT || 3000;

//app.use(express.cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// Set /public as our static content dir
app.use("/", express.static(path.join(__dirname, 'public')));
app.use("/login", express.static(path.join(__dirname, 'public')));
app.use("/cabinet", express.static(path.join(__dirname, 'public')));

app.get('/',
  function(req, res) {
    res.redirect('/login');
  });

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});

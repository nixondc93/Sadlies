const express = require('express');
const app = express();
const db = require('./models');
const controllers = require('./controllers');
const bodyParser = require('body-parser');
const postTweets = require('./postTweets.js');
const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

/* WATSON API */
let personality_insights = new PersonalityInsightsV3({
  "url": 'https://gateway.watsonplatform.net/personality-insights/api',
  "username": '6cf44ed0-b68d-4867-9def-84b2cf03b2c4',
  "password": 'kHgqTmBVxmRG',
  "version_date": '2016-10-19'
});

let params = {
  content_items: require('./string.json'),
  consumption_preferences: true,
  raw_scores: true,
  headers: {
    'accept-language': 'en',
    "Content-Type": "text/plain;charset=utf-8"
  }
};

personality_insights.profile(params, function(err, response) {
  if(err){ console.log('The Error:', JSON.stringify(err)); return;}
    console.log('Success!');
    return console.log(JSON.stringify(response));
  });

/* SERVING STATIC FILES */
app.use(express.static('public'));
app.use(express.static('views'));

/* MIDDLEWARE */
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

/* ROUTES */
app.get('/', function homepage(req, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/api/sadlies', controllers.sadlies.index);
app.post('/api/sadlies', controllers.sadlies.create);
app.get('/api/sadlies/nuke', controllers.sadlies.destroy);

/* SERVER */
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is running on port:3000');
  console.log('Press CTRL-C to stop\n');
});

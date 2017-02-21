const express = require('express');
const app = express();
const db = require('./models');
const controllers = require('./controllers');
const bodyParser = require('body-parser');
const postTweets = require('./postTweets.js');
const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

let personality_insights = new PersonalityInsightsV3({
  username: 'caseyjoneal@gmail.com',
  password: 'Ghouls123.',
  version_date: '2016-10-20'
});

let params = {
  content_items: "Derry might be cool?",
  consumption_preferences: true,
  raw_scores: true,
  headers: {
    'accept-language': 'en',
    'accept': 'application/json'
  }
};

personality_insights.profile(params, function(err, response) {
  if(err){ console.log('Error:', err); }
    console.log('Success! -> ', response);
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
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on port:3000');
  console.log('Press CTRL-C to stop\n');
});

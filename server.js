const express = require('express');
const app = express();
const db = require('./models');
const bodyParser = require('body-parser');
const Fs = require('file-system');
const controllers = require('./controllers');
const watsonAnalysis = require('./watson_api.js');
const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

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
app.post('/api/sadlspies', controllers.sadlies.create);
app.get('/api/sadlies/nuke', controllers.sadlies.destroy);
app.get('/api/sadlies/watson', controllers.watson.watsonIndex);

/* SERVER */
app.listen(process.env.PORT || 3000, function(){
  console.log('Express server is running on port:3000');
  console.log('Press CTRL-C to stop\n');
});

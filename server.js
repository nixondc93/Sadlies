let express = require('express');
let app = express();
let db = require('./models');
let controllers = require('./controllers');
let bodyParser = require('body-parser');

// let tweets = require('.twitter');


/* SERVING STATIC FILES */
app.use(express.static('public'));
app.use(express.static('views'));

/* MIDDLEWARE */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* ROUTES */
app.get('/', function homepage (req, response) {
 response.sendFile( __dirname + '/views/index.html');
});

app.get('/api/sadlies', controllers.sadlies.index);
app.post('/api/sadlies', controllers.sadlies.create);
app.get('/api/sadlies/nuke', controllers.sadlies.destroy);

/* SERVER */
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is running on port:3000');
  console.log('Press CTRL-C to stop\n');
});

const db = require('./models');
const trumpTweets = require('./trumpTweets.js');

db.Tweet.remove({}, function(err, response) {
  db.Tweet.create(trumpTweets.tweets, function(err, SuccessClbk ) {
    if(err){ console.log('There was an error -> ', err); }
    return console.log('Success!', SuccessClbk.length , ' tweets were created.');
  })
})
  

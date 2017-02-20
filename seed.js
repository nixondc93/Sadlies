const db = require('./models');

// tweets = [{}]

db.Tweet.remove({}, function(err, response) {
  db.Tweet.create(tweets, function(err, SuccessClbk ) {
    if(err){ console.log('There was an error -> ', err); }
    return console.log('Success!', SuccessClbk.length , ' were created.');
  })
})

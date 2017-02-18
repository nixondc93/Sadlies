const db = require('../models');

function index(req, response){
  db.Tweet.find(function(err, tweets){
    if(err) { console.log('There was an error finding tweets.', err); }
      return response.json({tweets})
  })
}

function create(req, response){
  db.Tweet.create(function(err, tweet){
    if(err) { console.log('There was an error creating tweet.', err); }
      return response.json(tweet)
  })
}

module.exports = {
  index: index,
  create: create
}

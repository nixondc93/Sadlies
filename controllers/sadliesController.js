const db = require('../models');

function index(req, response){
  db.Tweet.find({},function(err, tweets){
    if(err) { console.log('There was an error finding tweets.', err); }
      console.log('Success from index fn ->', tweets);
      return response.json(tweets)
  })
}

function create(req, response){
  console.log(req);
  db.Tweet.create(req.body, function(err, tweet){
    if(err) { console.log('There was an error creating tweet.', err); }
      response.json(tweet)
      return  console.log('Derrys string success!!');
  })
}

module.exports = {
  index: index,
  create: create
}

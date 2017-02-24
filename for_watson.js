const db = require('./models');

let tweets = "";

db.Tweet.find({}, function(err, tweetText){
  if(err){return console.log('There was an error!');}
  tweetText.forEach(function(el,index,tweetText){
    tweets = tweets.concat(tweetText[index].text);
  });
});

module.exports.tweets = tweets

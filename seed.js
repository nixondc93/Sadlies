const db = require('./models');
const Twit = require('twit');
const Fs = require('file-system');

const T = new Twit({
  consumer_key: 'N1bCISbBQDYHfohkAfNBKqStY',
  consumer_secret: 'tYuH96sqwHzYa4hSpRKf7WlVZDhW5b1vxFK800Bxw1rk9o9ty7',
  app_only_auth: true
});

let tweets = [],
  tweetCount = 0,
  start;

T.get('statuses/user_timeline', {
  screen_name: 'realDonaldTrump',
  count: 1
}, function (err, data, response) {
  start = data[0].id
});

const Interval = setInterval(() => {

  start = tweets.length === 0 ? start : tweets[tweets.length - 1].id;

  T.get('statuses/user_timeline', {
    screen_name: 'realDonaldTrump',
    count: 200,
    max_id: start
  }, function (err, data, response) {

    if (err) {
      console.log("Error fectching tweets");
    }
    if (data[0] === undefined) {
      db.Tweet.remove({}, function(err, response) {
        db.Tweet.create(tweets, function(err, SuccessClbk ) {
          if(err){ console.log('There was an error -> ', err); }
          return console.log('Success!', SuccessClbk.length , ' tweets were created.');
        });
      });
      return clearInterval(Interval);
    }
    tweetCount += data.length;
    tweets = tweets.concat(data);
    console.log("Number of tweets: ", tweetCount);
  });
}, 1000);
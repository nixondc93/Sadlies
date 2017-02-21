const Twit = require('twit');
const Fs = require('file-system');
const Tweets = require('./trumpTweets');

const T = new Twit({
  consumer_key: 'N1bCISbBQDYHfohkAfNBKqStY',
  consumer_secret: 'tYuH96sqwHzYa4hSpRKf7WlVZDhW5b1vxFK800Bxw1rk9o9ty7',
  app_only_auth: true
});

let tweets = [],
  tweetCount = 0;

const Interval = setInterval(() => {

  let start = tweets.length === 0 ? 833050081641234400 : tweets[tweets.length - 1].id

  T.get('statuses/user_timeline', {
    screen_name: 'realDonaldTrump',
    count: 200,
    max_id: start
  }, function (err, data, response) {

    if (err) {
      console.log("Error fectching tweets");
    }
    if (data[0] === undefined) {
      console.log('inside if statement')
      Fs.writeFile('./trumpTweets.js', JSON.stringify(tweets), 'utf8');
      clearInterval(Interval);
    }
    tweetCount += data.length;
    tweets = tweets.concat(data);
    console.log("Number of tweets: ", tweetCount);
  });
}, 2000);
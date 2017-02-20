const Twit = require('twit');
const Fs = require('file-system');
const Tweets = require('./trumpTweets');

const T = new Twit({
  consumer_key:         'N1bCISbBQDYHfohkAfNBKqStY',
  consumer_secret:      'tYuH96sqwHzYa4hSpRKf7WlVZDhW5b1vxFK800Bxw1rk9o9ty7',
  app_only_auth:        true
  // access_token:         '743445356269211648-zeQuKEfFHTSDe3alzaCYhgmzRaBFXz9',
  // access_token_secret:  'hMIIGpgeiO3wjU9B4zry6YP1LpsvRv2m2usE6S93UCINo'
  // timeout_ms:           5*60*1000,
});

// setInterval(()=>{
  T.get('statuses/user_timeline', { screen_name: 'realDonaldTrump', count: 200}, function(err, data, response) {
  if(err){ console.log("Error fectching tweets");}

  data.forEach(function(el,index,tweets){
    return console.log(tweets);
  })
});
// }, 1000)

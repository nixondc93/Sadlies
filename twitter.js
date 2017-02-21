const Twit = require('twit');
const Fs = require('file-system');
const Tweets = require('./trumpTweets');


const T = new Twit({
  consumer_key: 'N1bCISbBQDYHfohkAfNBKqStY',
  consumer_secret: 'tYuH96sqwHzYa4hSpRKf7WlVZDhW5b1vxFK800Bxw1rk9o9ty7',
  app_only_auth: true
  // access_token:         '743445356269211648-zeQuKEfFHTSDe3alzaCYhgmzRaBFXz9',
  // access_token_secret:  'hMIIGpgeiO3wjU9B4zry6YP1LpsvRv2m2usE6S93UCINo'
  // timeout_ms:           5*60*1000,
});

let tweets;
while (tweets[0].id !== undefined) {
  setInterval(() => {
    T.get('statuses/user_timeline', {
      screen_name: 'realDonaldTrump',
      count: 200,
      max_id: data[199].id
    }, function (err, data, response) {
      tweets = data;
      if (err) {
        console.log("Error fectching tweets");
      }
      console.log("Number of tweets: ", data.length)
      // let json = JSON.stringify(data);

  Fs.readFile('./trumpTweets.js', 'utf8', function readFileCallback(err, data){
      if (err){
        console.log(err);
      } else {
      obj = JSON.parse(data); //now it an object
      obj.push(tweets); //add some data
      json = JSON.stringify(obj); //convert it back to json
      Fs.writeFile('/trumpTweets.js', json, 'utf8'); // write it back
  }});
      // Fs.writeFile('./trumpTweets.js', json, 'utf8');
    });
  }, 1000)
}

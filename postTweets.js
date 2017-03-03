// const Twit = require('twit');
// const Fs = require('file-system');
// const request = require('request');


// // request.post('http://localhost:3000/api/sadlies', { json: { text: 'This is such test!' } },
// //     function(err, response){
// //       if(!err && response.statusCode == 200){
// //         return  console.log(response.body)
// //       }
// //     });


// const T = new Twit({
//   consumer_key: 'N1bCISbBQDYHfohkAfNBKqStY',
//   consumer_secret: 'tYuH96sqwHzYa4hSpRKf7WlVZDhW5b1vxFK800Bxw1rk9o9ty7',
//   app_only_auth: true
// });


// // var stream = T.stream('statuses/filter', {
// //     // screen_name: 'realDonaldTrump'
// //     track: ['@nixondc93']
// // });

// // stream.on('connect', function (request) {
// //   console.log(request);
// //   console.log("end of request")
// // })

// // stream.on('tweet', function (tweet) {
// //     console.log(tweet);
// //     console.log("tweeting");
// // });


// let start;

// T.get('statuses/user_timeline', {
//   screen_name: 'realDonaldTrump',
//   count: 1
// }, function (err, data, response) {
//   start = data[0].id
// });

// const Interval = setInterval(() => {

//   // start = tweets.length === 0 ? start : tweets[tweets.length - 1].id;

//   T.get('statuses/user_timeline', {
//     screen_name: 'realDonaldTrump',
//     count: 200,
//     // max_id: start
//   }, function (err, data, response) {

//     if (err) {
//       console.log("Error fectching tweets");
//     }
//     if (data[0] !== undefined) {
//       console.log(data)
//       //   db.Tweet.remove({}, function (err, response) {
//       //     db.Tweet.create(tweets, function (err, SuccessClbk) {
//       //       if (err) {
//       //         console.log('There was an error -> ', err);
//       //       }
//       //       console.log('Success!', SuccessClbk.length, ' tweets were created.');
//       //     });
//       //   });
//       clearInterval(Interval);
//     }
//   });
// }, 1000 * 60);
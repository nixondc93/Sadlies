const Twit = require('twit');
const Fs = require('file-system');
const Tweets = require('./trumpTweets');
const request = require('request');


// request.post('http://localhost:3000/api/sadlies', { json: { text: 'This is such test!' } },
//     function(err, response){
//       if(!err && response.statusCode == 200){
//         return  console.log(response.body)
//       }
//     });

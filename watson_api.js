const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
const express = require('express');
const app = express();
const Twit = require('twit');
const Fs = require('file-system');
const db = require('./models');
let tweets = "";

const Interval = setInterval(() => {
let personality_insights = new PersonalityInsightsV3({
  "url": 'https://gateway.watsonplatform.net/personality-insights/api',
  "username": '6cf44ed0-b68d-4867-9def-84b2cf03b2c4',
  "password": 'kHgqTmBVxmRG',
  "version_date": '2016-10-19'
});

db.Tweet.find({},function(err, tweetText){
  if(err){return console.log('There was an error!');}
  tweetText.forEach(function(el,index,tweetText){
    if(index < 2000){
      return tweets = tweets.concat(el.text);
    };
  });
});

let params = {
  content_items: [{
       "contentItems"  : [
       {
         "language" : "en",
         "content" : tweets,
         "contenttype" : "application/json"
       }
     ]
  }],
  consumption_preferences: true,
  raw_scores: true,
  headers: {
    'accept-language': 'en',
    "Content-Type": "text/plain;charset=utf-8"
  }
};

personality_insights.profile(params, function(err, response) {
  console.time('timer');
  if(err){ console.log('The Error:', JSON.stringify(err));}
  db.Watson.remove({}, function(err, response){
    db.Watson.create(response,function(err, watsonClbk){
      if(err){ console.log('there was an error');}
        console.timeEnd('timer');
        return console.log(watsonClbk)
      })
    });
  });
}, 1000);

// 2.592e+8 // <- milliseconds equivalent to 3 days of time, for watson analysis. We can change this out after testing.

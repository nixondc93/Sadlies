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
    return
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
  if(err){ console.log('The Error:', JSON.stringify(err)); return;}
    console.log('Success! Wastson personality analysis completed.');
    return Fs.writeFile('./watson_analysis.json', JSON.stringify(response), 'utf8');
  });
}, 1000);

// 2.592e+8 // <- milliseconds equivalent to 3 days of time, for watson analysis. We can change this out after testing.

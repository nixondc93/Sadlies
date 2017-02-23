const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
const Twit = require('twit');
const Fs = require('file-system');
const express = require('express');
const watson = require('./for_watson');
const app = express();
const db = require('./models');

const Interval = setInterval(() => {
let personality_insights = new PersonalityInsightsV3({
  "url": 'https://gateway.watsonplatform.net/personality-insights/api',
  "username": '6cf44ed0-b68d-4867-9def-84b2cf03b2c4',
  "password": 'kHgqTmBVxmRG',
  "version_date": '2016-10-19'
});

let params = {
  content_items: [{
       "contentItems"  : [
       {
         "language" : "en",
         "content" : watson.tweets,

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

// 2.592e+8 // <- milliseconds equivalent to 3 days of time, for watson analysis.

const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
const express = require('express');
const app = express();
const Twit = require('twit');
const Fs = require('file-system');
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
         "content" : '',
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

db.Tweet.find({},function(err, tweetText){
  let watsonContent;
  if(err){return console.log('There was an error!');}
  tweetText.forEach(function(el,index,tweetText){
    params.content_items[0].contentItems[0]["content"] += el.text;
  })
    personality_insights.profile(params, function(err, response){
      if(err){ console.log('The Error:', JSON.stringify(err));}
      db.Watson.create(response,function(err, watsonClbk){
        if(err){ console.log('there was an error');}
      })
    })
});
}, 6.912e+8);


// let text_to_speech = new TextToSpeechV1({
//   username: '{username}',
//   password: '{password}'
// });
//
// let params = {
//   voice: 'en-US_AllisonVoice'
// };
//
// text_to_speech.voice(params, function(error, voice) {
//   if (error)
//     console.log('Error:', error);
//   else
//     console.log(JSON.stringify(voice, null, 2));
// });

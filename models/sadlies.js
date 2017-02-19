let mongoose = require("mongoose");
let Schema = mongoose.Schema;


let TweetSchema = new Schema ({
  source: String,
  text: String,
  retweet_count: Number,
  favorite_count: Number,
})


let Tweet = mongoose.model('Tweet', TweetSchema);
module.exports = Tweet;

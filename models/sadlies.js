let mongoose = require("mongoose");
let Schema = mongoose.Schema;


let TweetSchema = new Schema ({
  id: Number,
  text: String,
  id_str: Number,
  source: String,
  location: String,
  created_at: String,
  time_zone:: String,
  utc_offset: String,
  retweet_count: Number,
  favorite_count: Number,
  is_quote_status: String,
});

let Tweet = mongoose.model('Tweet', TweetSchema);
module.exports = Tweet;

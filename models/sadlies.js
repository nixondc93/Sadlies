let mongoose = require("mongoose");
let Schema = mongoose.Schema;


let TweetSchema = new Schema ({
  tweets: String
})


let Tweet = mongoose.model('Tweet', TweetSchema);
module.exports = Tweet;

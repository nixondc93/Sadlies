let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let WatsonAnalysis = new Schema ({
  word_count: Number,
  name: String,
  personality: [{
    trait_id: String,
    category: String,
    name: String,
    percentile: Number,
    raw_score: Number,
    children: [{
        trait_id: String,
        name: String,
        percentile: Number,
        raw_score: Number
      }]
  }],
  needs: [{
    trait_id: String,
    name: String,
    percentile: Number,
    raw_score: Number
  }],
  consumption_preferences: [{
    consumption_preference_category_id: String,
    name: String,
    consumption_preferences: [{
      consumption_preference_id: String,
      name: String,
      score: Number
    }],
  }]
});

let Watson = mongoose.model('Watson', WatsonAnalysis);
module.exports = Watson;

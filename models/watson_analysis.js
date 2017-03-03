let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ChilderenSchema = new Schema({
  trait_id: String,
  name: String,
  percentile: Number,
  raw_score: Number
});

let Children = mongoose.model('Children', ChildrenSchema);

let PersonalitySchema = new Schema({
  trait_id: String,
  category: String,
  name: String,
  percentile: Number,
  raw_score: Number,
  children: [Children.schema]
})

let Personality = mongoose.model('Personality', PersonalitySchema);

let WatsonAnalysis = new Schema ({
  word_count: Number,
  name: String,
  personality: [Personality.schema],
  needs: [Needs.schema],
  consumption_preferences: [ConsumptionCatigory.schema]
});

let Watson = mongoose.model('Watson', WatsonAnalysis);
module.exports = Watson;



let NeedsSchema = new Schema({
  trait_id: String,
  name: String,
  percentile: Number,
  raw_score: Number
});

let Needs = mongoose.model('Needs', NeedsSchema);

let ConsumptionCatigorySchema = new Schema({
  consumption_preference_category_id: String,
  name: String,
  consumption_preferences: [ConsumptionPreferences.schema]
})

let ConsumptionCatigory = mongoose.model('ConsumptionCatigory', ConsumptionCatigorySchema)

let ConsumptionPreferencesSchema = new Schema({
  consumption_preference_id: String,
  name: String,
  score: Number
})

let ConsumptionPreferences = mongoose.model('ConsumptionPreferences', ConsumptionPreferencesSchema)

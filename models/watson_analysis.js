let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let Personality = require('./personality.js');
let Needs = require('./needs.js');
let ConsumptionCatigory = require('./consumption_catigory.js');

let WatsonAnalysis = new Schema ({
  word_count: Number,
  name: String,
  createdAt: {type: Date, default: Date.now},
  personality: [Personality.schema],
  needs: [Needs.schema],
  consumption_preferences: [ConsumptionCatigory.schema]
});

let Watson = mongoose.model('Watson', WatsonAnalysis);
module.exports = Watson;

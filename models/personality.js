let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let Children = require('./children.js');

let PersonalitySchema = new Schema({
  trait_id: String,
  category: String,
  name: String,
  percentile: Number,
  raw_score: Number,
  children: [Children.schema]
})

let Personality = mongoose.model('Personality', PersonalitySchema);
module.exports = Personality;

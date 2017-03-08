let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let NeedsSchema = new Schema({
  trait_id: String,
  name: String,
  percentile: Number,
  raw_score: Number
});

let Needs = mongoose.model('Needs', NeedsSchema);
module.exports = Needs;

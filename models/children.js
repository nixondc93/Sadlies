let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ChildrenSchema = new Schema({
  trait_id: String,
  name: String,
  percentile: Number,
  raw_score: Number
});

let Children = mongoose.model('Children', ChildrenSchema);
module.exports = Children;

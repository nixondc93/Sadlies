let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ConsumptionPreferencesSchema = new Schema({
  consumption_preference_id: String,
  name: String,
  score: Number
})

let ConsumptionPreferences = mongoose.model('ConsumptionPreferences', ConsumptionPreferencesSchema)
module.exports = ConsumptionPreferences;

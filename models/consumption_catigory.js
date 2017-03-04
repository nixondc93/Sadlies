let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ConsumptionPreferences = require('./consumption_preferences.js')

let ConsumptionCatigorySchema = new Schema({
  consumption_preference_category_id: String,
  name: String,
  consumption_preferences: [ConsumptionPreferences.schema]
})

let ConsumptionCatigory = mongoose.model('ConsumptionCatigory', ConsumptionCatigorySchema)
module.exports = ConsumptionCatigory;

let mongoose = require("mongoose");
let Schema = mongoose.Schema;


let WatsonAnalysis = new Schema ({
  name: String
});

let Watson = mongoose.model('Watson', WatsonAnalysis);
module.exports = Watson;

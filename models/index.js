let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/api/sadlies');
module.exports.Tweet = require("./sadlies.js");

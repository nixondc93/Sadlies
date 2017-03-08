const db = require('../models');

function watsonIndex(req, response){
  db.Watson.find({},(err, watson) => {
    if(err) { console.log('There err in watsonindex', err); }
    console.log('Success');
    return response.json(watson)
  })
}

module.exports.watsonIndex = watsonIndex

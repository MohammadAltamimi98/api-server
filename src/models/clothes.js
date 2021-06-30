const mongoose = require('mongoose');


const clothesSchema = mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String }
})


const clothesModel = mongoose.model('clothesInst', clothesSchema);

module.exports = clothesModel;
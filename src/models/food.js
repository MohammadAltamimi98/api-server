'use strict';

const mongoose = require('mongoose');


const foodSchema = mongoose.Schema({
  name: { type: String, required: true },
  cuisine: { type: String }
})

const foodModel = mongoose.model('foodInst', foodSchema)

module.exports = foodModel;
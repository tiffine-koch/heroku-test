'use strict';

var mongoose = require('mongoose');

module.exports = mongoose.model('Clog', {
  price: Number,
  description: String
});

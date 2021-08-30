const mongoose = require('mongoose');

const post = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true,
  },
  urlImg: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('post', post);

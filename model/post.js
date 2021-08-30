const mongoose = require('../database');

const PostSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
    unique: true,
  },
  urlImg: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('Post', PostSchema);
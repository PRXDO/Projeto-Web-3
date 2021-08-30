const mongoose = require('../database');

const UsuarioSchema = new mongoose.Schema({
  login: {
    type: String,
    require: true,
    unique: true,
  },

  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },

  senha: {
    type: String,
    require: true,
    select: false,
  },
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;
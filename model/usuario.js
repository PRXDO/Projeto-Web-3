const mongoose = require('mongoose');

const novoUsuario = new mongoose.Schema({
  login: {
    typer: String,
    required: true,
    unique: true,
  },

  email: {
    typer: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  senha: {
    typer: String,
    required: true,
    select: false,
  },
});

module.exports = mongoose.nmodel('usuario'.novoUsuario);

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const RotaAutentica = require('./routes/auth');
const RotaBusca = require('./routes/busca');

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.use('/busca/usuario', RotaAutentica);
app.use('/busca/post', RotaBusca);

app.listen(process.env.PORT || 3000);

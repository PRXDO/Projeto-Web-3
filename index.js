const express = require('express');
const app = express();
const cors = require('cors');

const RotaAutentica = require('./routes/auth');
const RotaBusca = require('./routes/busca');

app.use(cors());
app.use(express.json());

app.use('/busca/usuario', RotaAutentica);
app.use('/busca/post', RotaBusca);

app.listen(process.env.PORT || 3000);

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoute = require('./routes/auth');
const apiRoute = require('./routes/busca');

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3000;
app.listen(PORT);

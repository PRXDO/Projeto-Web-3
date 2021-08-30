const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://1234:1234@cluster0.shqm6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
mongoose.Promise = global.Promise;

module.exports = mongoose;
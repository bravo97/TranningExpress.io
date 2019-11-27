const express = require('express'); // chuan es6 se dung const
const app = express();
//tao router
const router = express.Router();
const bodyParser = require('body-parser');

require('./apps/kernal')(app,express,bodyParser);

app.use("/",require('./routes/web.js'));


module.exports = app;
'use strict';

const mongoose = require('mongoose');
const server = require('./src/server.js');

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

mongoose.connect('mongodb://localhost:27017/auth-api', mongooseOptions)
  .then(() => {
    server.start(3000);
  })
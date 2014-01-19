'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var UserSchema = new Schema({
  id: String,
  password: String,
  nick: String
});

mongoose.model('User', UserSchema);

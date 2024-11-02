const mongoose = require('mongoose');
const { use } = require('../routes');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
  });

module.exports = mongoose.model('User', UserSchema);
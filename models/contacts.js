const mongoose = require('mongoose');
const { use } = require('../routes');
const Schema = mongoose.Schema;

const contactSchema = new mongoose.Schema({
    firstname: String, 
    lastname:  String, 
    email: String
});

module.exports = mongoose.model('Contact', contactSchema);
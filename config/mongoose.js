let config = require('./config');

//Database setup
const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect(config.ATLASDB);
    let mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'Connection error: '));
    mongodb.once('open', function() {
        console.log('====> Conntected to MongoDB');
    })
}
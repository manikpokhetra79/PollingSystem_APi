const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/polling_api_db');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'ERROR CONNECTING TO DATABASE...'));
db.once('open', () => {
  console.log('Successfully connected to Polling Api database');
});
module.exports = db;

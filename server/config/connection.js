const mongoose = require('mongoose');

// for deployment, set up the environmental variable MONGODB_URI for connection to the remote database

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/portfolio2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
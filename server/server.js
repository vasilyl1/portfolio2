const express = require('express');
const db = require('./config/connection');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '..', '/client', '/build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Backend server listening on port ${PORT}`);
    });
  });
const cors = require('cors');
const express = require('express');
require('dotenv').config();

const userRoutes = require('./routes/user');

const app = express();
const port = process.env.PORT;
const db = require('./db');

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);

db.connect(db.MODE_TEST, function (err) {
  if (err) {
    console.log('Could not connect to the database');
    process.exit(1);
  } else {
    app.listen(port, () => {
      console.log(`Connected to database.`)
      console.log(`API now working on port: ${port}.`);
    });
  }
});

db.create_table();

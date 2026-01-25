const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const connectDB = require('./config/dbConn');
require('dotenv').config()

// Connect to MongoDB
connectDB();

const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(routes);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');

  // Start the API server
  app.listen(process.env.PORT || 3001, () => console.log('Server has started'));
  {
    console.log ("yayy it works")
  }
})


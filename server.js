const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const app = express();
const PORT = process.env.PORT || 3001;
//var router = require("./routes/index.js");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(routes);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
//var MONGODB_URI = process.env.MONGODB_URI || "mongodb://mongolab-infinite-81177/googlebooks";
//mongoose.connect(MONGODB_URI, {useNewUrlParser:true});

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/games", 
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
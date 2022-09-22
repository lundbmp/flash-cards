const express = require("express");
const mongoose = require('mongoose');

//const db = require("./config/connection");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/pizza-hunt",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(PORT, () => {
  console.log(`listenting on ${PORT}...`);
});

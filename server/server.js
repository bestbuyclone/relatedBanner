const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
//const mongo = require("../database/index.js");

const port = process.env.PORT || 3001;
app.use(express.static("dist"));
app.use(
  bodyParser.json({
    strict: false
  })
);

app.listen(port, () => {
  console.log(`Related items microservice server active on port ${port}`);
});

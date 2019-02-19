const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const port = process.env.PORT || 3001;
app.use(express.static("dist"));
app.use(
  bodyParser.json({
    strict: false
  })
);

app.listen(port, () => {
  console.log(`Best Buy Clone server active on port ${port}`);
});

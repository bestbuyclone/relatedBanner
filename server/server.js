const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const mongo = require("../database/index.js");

const port = process.env.PORT || 3001;
app.use(express.static("dist"));
app.use(
  bodyParser.json({
    strict: false
  })
);

app.get("/initial", (req, res) => {
  let arr = [];
  const helper = async () => {
    for (let x = 1; x < 6; x++) {
      let thing = await mongo.retrieve(x);
      console.log("test", thing);
      arr.push(thing);
    }
    res.send(arr);
  };
  helper();
  console.log("arr: ", arr);
});

app.listen(port, () => {
  console.log(`Related items microservice server active on port ${port}`);
});

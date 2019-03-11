//related mongo
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/related", { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", function(err) {
  console.log("mongoose connection error", err);
});

db.once("open", function() {
  console.log("Successful DB connection");
});

const relatedSchema = mongoose.Schema({
  name: String,
  src: String,
  price: Number
});

const related = mongoose.model("related", relatedSchema);

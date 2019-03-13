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
  id: Number,
  name: String,
  src: String,
  price: Number
});

const Product = mongoose.model("Product", relatedSchema);

const save = (info, cb) => {
  console.log("hit save func");
  let related = new Product({
    id: info.id,
    name: info.name,
    src: info.pic,
    price: info.price
  });
  related
    .save()
    .then(data => {
      cb(null, data);
    })
    .catch(err => {
      cb(err);
    });
};
const retrieve = id => {
  console.log("you've hit the retrieve handler");
  let final = Product.findOne({ id: id }, (err, res) => {
    if (err) {
      console.log("error in retrieve");
    } else {
      //console.log(res);
      return res;
    }
  });
  return final;
  // Product.findOne({ id: id })
  //   .then(data => cb(null, data))
  //   .catch(err => cb(err));
};

module.exports = {
  save,
  retrieve
};

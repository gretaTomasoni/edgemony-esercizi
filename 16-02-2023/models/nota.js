const mongoose = require("mongoose");

var notaSchema = new mongoose.Schema({
  name: { type: String },
  gift: { type: String },
  price: { type: Number },
  text: { type: String },
});

mongoose.model("notaModel", notaSchema);

var mongoose = require("mongoose");

var linijaSchema = new mongoose.Schema({
  prevoznik: String,
  trgnuvaOd: String,
  trgnuvaVo: String,
  destinacija: String,
  cena: Number
});

module.exports = mongoose.model("Linija", linijaSchema);
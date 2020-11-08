var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var linijaSchema = new mongoose.Schema({
  prevoznik: String,
  trgnuvaOd: String,
  trgnuvaVo: String,
  destinacija: String,
  cena: Number
});

var UserSchema = new mongoose.Schema({
    imePrezime: String,
    telefon: String,
    username: String,
    password: String,
    datumNaRaganje: String,
    pol: String,
    student: Boolean,
    linii: [linijaSchema]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
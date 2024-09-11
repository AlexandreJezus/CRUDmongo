const db = require("../../db.js");

const Schema = db.Schema;

const motoSchema = new Schema({
  marca: {
    type: String,
    required: true,
  },
  cor: {
    type: String,
    required: false,
  },
  modelo: {
    type: String,
    required: false,
  },
  cilindrada: {
    type: Number,
    required: true,
  },
  peso: {
    type: Number,
    required: false,
  },
});

const Moto = db.model("Moto", motoSchema);

module.exports = Moto;

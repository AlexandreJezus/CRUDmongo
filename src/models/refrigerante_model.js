const db = require("../../db.js");

const Schema = db.Schema;

const refrigeranteSchema = new Schema({
  porcentagem_suco: {
    type: Number,
    required: false,
  },
  kcal200ml: {
    type: Number,
    required: false,
  },
  sabor: {
    type: String,
    required: true,
  },
  tamanhoMl: {
    type: Number,
    required: false,
  },
});

const Refrigerante = db.model("Refrigerante", refrigeranteSchema);

module.exports = Refrigerante;

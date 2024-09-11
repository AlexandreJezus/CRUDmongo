const mongoose = require("mongoose");

const mongoDB =
  "mongodb+srv://alexandrejezusp:SulJckJqv9Sn4LGe@cluster0.yklln.mongodb.net/CRUDmongo";

async function main() {
  await mongoose.connect(mongoDB);
}

main()
  .then(() => console.log("Conexão realizada com sucesso"))
  .catch((err) => console.log(err));

module.exports = mongoose;

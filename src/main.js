const express = require("express");
const cep_endereco = require("./middleware/cep_endereco.js");
const app = express();
const port = 5000;

app.use(express.json());

app.post("/aeroporto", cep_endereco, (req, res) => {
  res.json(req.body);
});

app.listen(port, () => console.log("Servidor escutando na porta " + port));

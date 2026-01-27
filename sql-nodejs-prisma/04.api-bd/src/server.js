const express = require("express");
const router = require("./router");

const app = express();

app.use(express.json());

app.use("/api", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na em http://localhost:${PORT}`);
});

module.exports = app;

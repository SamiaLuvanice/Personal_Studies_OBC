const express = require("express");
const router = require("./router");

const app = express();

app.use(express.json());

app.use("/api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor initiado na em http://localhost:${PORT}`);
});

module.exports = app;

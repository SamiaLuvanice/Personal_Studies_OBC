const express = require("express");
const gamesController = require("./controller/games-controller");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.get("/games", gamesController.index);
app.get("/games/:id", gamesController.show);

app.post("/games", gamesController.save);
app.post("/games/:id/genres", gamesController.addGenre);

app.put("/games/:id", gamesController.update);

app.delete("/games/:id", gamesController.delete);
app.delete("/games/:id/genres/:genre", gamesController.removeGenre);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

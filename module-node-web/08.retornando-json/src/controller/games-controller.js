const games = [
  { id: 1, name: "The Luvinha of Zelda: Breath of the Wild", genres: ["Action-adventure"], year: 2017 },
  { id: 2, name: "Super Iana Odyssey", genres: ["Platform"], year: 2017 },
  { id: 3, name: "Minecraft", genres: ["Sandbox"], year: 2011 },
  { id: 4, name: "Fortnite", genres: ["Battle Royale"], year: 2017 },
  { id: 5, name: "Call of Duty: Warzone", genres: ["Battle Royale"], year: 2020 }
];

module.exports = {
  // GET / games
  index: (req, res) => {
    res.json(games);
  },

  // GET / games /: id
  show: (req, res) => {
    const { id } = req.params;
    const game = games.find(game => game.id === +id);

    if (!game) {
      return res.status(404).json({ message: "Game not found!" });
    }
    res.json(game);
  },

  // POST / games
  save: (req, res) => {
    const { name, genres, year } = req.body;

    const newGame = {
      id: Math.floor(Math.random() * 1000),
      name,
      genres,
      year
    }

    games.push(newGame);

    res.status(201).json(newGame);
  },

  // PUT /games/:id

  update: (req, res) => {
    const { id } = req.params;
    const { name, year } = req.body;

    const gameIndex = games.findIndex(game => game.id === +id);
    if (gameIndex === -1) {
      return res.status(404).json({ message: "Game not found!" });
    }

    if (typeof name === "string") {
      games[gameIndex].name = name;
    }

    if (typeof year === "number") {
      games[gameIndex].year = year;
    }

    res.json(games[gameIndex]);
  },

  // DELETE /games/:id
  delete: (req, res) => {
    const { id } = req.params;
    const gameIndex = games.findIndex(game => game.id === +id);

    if (gameIndex === -1) {
      return res.status(404).json({ message: "Game not found!" });
    }

    games.splice(gameIndex, 1);
    res.status(204).end();
  },

  // POST /games/:id/genres
  addGenre: (req, res) => {
    const { id } = req.params;
    const { genre } = req.body;
    const gameIndex = games.findIndex(game => game.id === +id);

    if (gameIndex === -1) {
      return res.status(404).json({ message: "Game not found!" });
    }

    if (typeof genre !== "string" || games[gameIndex].genres.includes(genre)) {
      return res.status(400).json({ message: "Invalid genre!" });
    }

    games[gameIndex].genres.push(genre);

    res.json(games[gameIndex]);
  },

  // DELETE /games/:id/genres/:genre
  removeGenre: (req, res) => {
    const { id, genre } = req.params;
    const gameIndex = games.findIndex(game => game.id === +id);

    if (gameIndex === -1) {
      return res.status(404).json({ message: "Game not found!" });
    }

    if (typeof genre !== "string" || !games[gameIndex].genres.includes(genre)) {
      return res.status(400).json({ message: "Invalid genre!" });
    }

    games[gameIndex].genres = games[gameIndex].genres.filter(g => g !== genre);
    res.json(games[gameIndex]);
  }
};

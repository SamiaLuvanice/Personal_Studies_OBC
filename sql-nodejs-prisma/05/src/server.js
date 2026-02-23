require("dotenv/config");
const express = require("express");
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");

const app = express();

app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const { Router } = require("express");
const prisma = require("../database");

const router = Router();

router.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

router.post("/", async (req, res) => {
  const { name, email } = req.body;
  const newUser = await prisma.user.create({
    data: { name, email },
  });
  res.status(201).json(newUser);
});

router.get("/:id", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: Number(req.params.id) },
    include: { posts: true },
  });
    res.json(user);
});

router.put("/:id", async (req, res) => {
  const { name, email } = req.body;
  const updatedUser = await prisma.user.update({
    where: { id: Number(req.params.id) },
    data: { name, email },
  });
  res.json(updatedUser);
});

router.delete("/:id", async (req, res) => {
  await prisma.user.delete({
    where: { id: Number(req.params.id) },
  });
  res.status(204).send();
});

module.exports = router;

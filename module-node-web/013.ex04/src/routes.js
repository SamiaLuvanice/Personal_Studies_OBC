const express = require("express");
const authController = require("./controlles/auth-controller");
const welcomeController = require("./controlles/welcome-controller");
const {
  optionalAuth,
  ensureAuth,
  ensureAdmin,
} = require("./middlewares/auth-middlewares");
const usersController = require("./controlles/users-controller");

const router = express.Router();

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

router.get("/welcome", optionalAuth, welcomeController.welcome);

router.get("/users", ensureAuth, ensureAdmin, usersController.index);
router.get("/users/:id", ensureAuth, ensureAdmin, usersController.show);
router.post("/users", ensureAuth, ensureAdmin, usersController.save);
router.delete("/users/:id", ensureAuth, ensureAdmin, usersController.delete);

module.exports = router;

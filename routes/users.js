const express = require("express");
const router = express.Router();

// Require controller modules.
const user_controller = require("../controllers/userController");

// GET request for list of all Book items.
router.get("/", user_controller.getUsers);

// POST request for creating User.
router.post("/user/create", user_controller.createUser);

// POST request to delete User.
router.post("/user/:id/delete", user_controller.deleteUser);

// POST request to update User.
router.post("/user/:id/update", user_controller.updateUser);

// GET request for one User.
router.get("/user/:id", user_controller.getUserById);

module.exports = router;
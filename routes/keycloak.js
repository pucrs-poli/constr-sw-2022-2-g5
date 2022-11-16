const express = require("express");
const controller = require("../controllers/auth");
const router = express.Router();

router.post("/login", controller.login);
router.get("/userinfo", controller.userInfo);
router.get("/users", controller.getUsers);
router.get("/users/:id", controller.getUserById);
router.post("/users", controller.createUser);
router.put("/users/:id", controller.updateUserData);
router.patch("/users/:id", controller.updateUserPassword);

module.exports = router;
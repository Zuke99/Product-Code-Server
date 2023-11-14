const express = require("express");
const router = express.Router();
const controller = require("../controller/UserController");
const middleware = require("../middlewares/userMiddlewares")

router.post("/user/user-login", controller.userLogin);
router.post("/user/register-user", controller.registerUser);
router.get("/user/isLoggedIn",middleware.verifyToken, controller.isLoggedIn);

module.exports = router;

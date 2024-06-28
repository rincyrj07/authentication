const express = require("express");
const router = express.Router();
const {getUsers, userRegister, userLogin} = require("../controllers/userController");

router.route("/users").get(getUsers);
router.route("/register").post(userRegister);
router.route("/login").post(userLogin);



module.exports = router

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { fieldValidator } = require("../Middlewares/Field-Validator");
const { itemListRegister } = require("../Controllers/RegisterPublication");

router.post("/", itemListRegister);

module.exports = router;

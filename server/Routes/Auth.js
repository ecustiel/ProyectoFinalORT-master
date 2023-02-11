const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { fieldValidator } = require("../Middlewares/Field-Validator");
const {
  userRegister,
  userLogin,
  tokenRenew,
  userUpdateProfile,
  searchUser,
} = require("../Controllers/Auth");
const { jwtValidator } = require("../Middlewares/Jwt-Validator");

//Login
router.post(
  "/login",
  [
    check("email", "El Email es Obligatorio!").isEmail(),
    check(
      "password",
      "La contraseña debe tener al menos 6 caracteres!"
    ).isLength({ min: 6 }),
    fieldValidator,
  ],
  userLogin
);

//Registro
router.post(
  "/register",
  [
    check("name", "El nombre es obligatorio!").not().isEmpty(),
    check("surname", "El apellido es obligatorio!").not().isEmpty(),
    check("address", "La direccion es obligatoria!").not().isEmpty(),
    check("city", "La ciudad es obligatoria!").not().isEmpty(),
    check("celNumber", "El telefono es obligatorio!").not().isEmpty(),
    check("email", "El Email es Obligatorio!").isEmail(),
    check(
      "password",
      "La contraseña debe tener al menos 6 caracteres"
    ).isLength({ min: 6 }),
    fieldValidator,
    //agregar las demas validaciones para el registro, separar con coma
  ],
  userRegister
);

//Renovacion de Token
router.get("/renew", jwtValidator, tokenRenew);

//Actualizacion de Usuario
router.route("/profile").post(userUpdateProfile);
//router.route("/profile").get(searchUser);
router.get("/profile", searchUser);
module.exports = router;

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { fieldValidator } = require("../Middlewares/Field-Validator");
const {
  registerPublication,
  getPublications,
  getPublicationsById,
} = require("../Controllers/RegisterPublication");

//Registro
router.post(
  "/regPublication",
  [
    check("title", "El titulo es obligatorio!").not().isEmpty(),
    check("direccion", "La direccion es obligatoria!").not().isEmpty(),
    fieldValidator,
    //agregar las demas validaciones para el registro, separar con coma
  ],
  registerPublication
);

//Obtener Publicaciones
router.get("/", getPublications);

//Obtener Publicaciones por id
router.get("/:id", getPublicationsById);

module.exports = router;

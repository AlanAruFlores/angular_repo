const express = require("express");
const personasRouter = express.Router();

const { getAll,getById,getByNombreAndApellido } = require("../controller/personas_controller.js");
const { getAllValidator } = require("../validators/persona_validator.js");

//Routing en Express
//personaRouter controla estas actions
personasRouter.get("/",getAllValidator,getAll);

personasRouter.get("/:id", getById);

personasRouter.get("/:nombre/:apellido", getByNombreAndApellido);

module.exports.personasRouter = personasRouter;

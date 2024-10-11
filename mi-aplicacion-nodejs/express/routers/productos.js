const express = require("express");
const productoRouter = express.Router();
const { getAll, postNewProducto, updateProductoById, deleteProductoById } = require("../controller/productos_controller");
const { postNewProductoValidator } = require("../validators/producto_validator");

//habilita el middleware que analiza las solicitudes entrantes con el formato JSON.
productoRouter.use(express.json());

productoRouter.get("/", getAll );
productoRouter.post("/", postNewProductoValidator,postNewProducto)
productoRouter.put("/:id",updateProductoById);
productoRouter.delete("/:id", deleteProductoById);

module.exports.productoRouter  = productoRouter;



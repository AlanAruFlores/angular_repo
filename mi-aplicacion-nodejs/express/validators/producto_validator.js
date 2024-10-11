const express = require("express");


const postNewProductoValidator = (req, res, next) =>{
    const productoNuevo = req.body;
    console.log(productoNuevo);
    if(typeof productoNuevo.id !== "number" )
        return res.status(400).send("El id del producto debe ser un numero")
    if( typeof productoNuevo.precio !== "number")
        return res.status(400).send("El precio del producto debe ser un numero")
    next();
}

module.exports = {
    postNewProductoValidator
}
const express = require("express");


const getAllValidator = (req,res,next)=>{
    let orden = req.query.ordenamiento; // recibe en la parte final del path un parametro "..?ordenamiento=value"
    if(orden != undefined && typeof orden !== "string")
        return res.status(400).send({
            message:"No se acepta otro tipo que no sea string"
        });
    
    if(orden != undefined && (orden !== "desc" && orden !== "asc"))
        return res.status(400).send({
            message:"No existe ese ordenamiento"
        });

    next(); //Se ejecuta la siguiente funcion (controller get all)
}

module.exports = {
    getAllValidator
}
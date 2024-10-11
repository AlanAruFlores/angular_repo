const express= require("express");
const {productosData} = require ("../data/productos_data");

const getAll = (req,res)=>{
    res.send(JSON.stringify(productosData));
}

//agregar producto
const postNewProducto = (req, res) =>{
    let productoNuevo = req.body; //extraigo el cuerpo
    console.log(productoNuevo);
    productosData.push(productoNuevo);
    res.send(JSON.stringify(productosData));
}

//actualizar producto
const updateProductoById  = (req,res) =>{
    const id = req.params.id;
    const newData = req.body;
    //Busco el indice del producto a filtrar
    const productoSelectIndex = productosData.findIndex(p=>p.id == id);

    if(productoSelectIndex<0)
        return res.status(400).send("No se encontro el id del producto");

    productosData[productoSelectIndex] = newData;
    res.send(JSON.stringify(productosData));
}

//eliminar producto
const deleteProductoById = (req,res) =>{
    const id = req.params.id;
    const productoSelectIndex =  productosData.findIndex(p=> p.id == id);

    if(productoSelectIndex < 0 )
        return res.status(400).send("No se encontro el id del producto");

    productosData.splice(productoSelectIndex,1);
    res.send(JSON.stringify(productosData));    
}

module.exports = {
    getAll,
    postNewProducto,
    updateProductoById,
    deleteProductoById
}
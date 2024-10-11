const express = require("express");
const {personasData} = require("../data/personas_data.js"); //Obtengo la lista

const getAll = (req,res)=>{
    let orden = req.query.ordenamiento; // recibe en la parte final del path un parametro "..?ordenamiento=value"
    console.log(`ORDEN: ${orden}`);
    
    if(orden == "desc")
        return res.send(JSON.stringify(personasData.sort( (a,b) => b.id - a.id))); // ordenamiento descendientemente y luego tranformamos a un json
    res.send(JSON.stringify(personasData));
};

const getById = (req,res)=>{
    //Obtengo el parametro de la url
    const idParametro =  req.params.id;

    let personasSeleccionada = personasData.filter(x=>x.id == idParametro);
    if(personasSeleccionada.length != 0)
        return res.send(JSON.stringify(personasSeleccionada));
    
    // Alternativa 1: res.statusCode = 401; // codigo de estado
    
    //Alternativa 2: mandamos codigo de estado y luego la data.
    res.status(401).send("No se encontro la persona");
};

const getByNombreAndApellido =  (req,res)=>{
    const nombreParam = req.params.nombre;
    const apellidoParam = req.params.apellido;

    const personasNombreApellidos = personasData.filter(x=> x.nombre == nombreParam && x.apellido == apellidoParam);
    
    if(personasNombreApellidos.length !== 0)
        return res.status(200).send(JSON.stringify(personasNombreApellidos));

    return res.status(400).send("No se encuentra ningun registro");
};


module.exports = {
    getAll,
    getById,
    getByNombreAndApellido
}
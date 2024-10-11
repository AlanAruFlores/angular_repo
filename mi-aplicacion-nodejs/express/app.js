const express = require("express"); 
const app = express(); // crea la aplicacion de express

const {personasData} = require("./personas_data.js"); //Obtengo la lista


//Routing en Express

//Action GET inicial
app.get('/', (req,res)=>{
    res.send("Servidor en Express");
});



//Si en un ambiente de deploy, se asigna un puerto por default , se selecciona. En caso contrario se usa el puerto 4000
const PUERTO = process.env.PORT || 4000;
app.listen(PUERTO, ()=>{
    console.log("Servidor escuchando........");
});

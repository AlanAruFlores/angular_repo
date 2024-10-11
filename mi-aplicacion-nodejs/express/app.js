const express = require("express"); 
const app = express(); // crea la aplicacion de express

const {personasData} = require("./data/personas_data.js"); //Obtengo la lista

//Routers --> Permiten definir una path base que tiene en comun un grupo de actions
const {personasRouter} = require("./routers/personas.js");
const {productoRouter} = require("./routers/productos.js");

app.use("/api/personas", personasRouter);
app.use("/api/productos", productoRouter);


//Action GET inicial
app.get('/', (req,res)=>{
    res.send("Servidor en Express"); // envia 
});

//Si en un ambiente de deploy, se asigna un puerto por default , se selecciona. En caso contrario se usa el puerto 4000
const PUERTO = process.env.PORT || 4000;
app.listen(PUERTO, ()=>{
    console.log("Servidor escuchando........");
});

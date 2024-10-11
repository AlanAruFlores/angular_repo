const http = require("http");

const servidor = http.createServer((req,res)=>{
    res.end("Hola desde nodemon")
});

const PUERTO = 3000;
servidor.listen(3000,()=>{
    console.log("Escuchando solicitudes")
});
const http = require("http");
const PUERTO = 3000;


const server = http.createServer((request, response)=>{

    console.log("Propiedadaes request: ");
    console.log(request);
    console.log(request.url); //Muestra la direccion de la peticion
    console.log(request.method); // Muestra el verbo http


    console.log("Propiedades response");
    console.log(response);
    console.log(response.statusCode); // muestra el codigo de estado;


    //response.statusCode = 404;
    console.log(response.statusCode); // muestra el codigo de estado;
    
    //Cabecera de la respuesta
    response.setHeader("content-type", "application/json"); // formato de la respuesta
    console.log(response.getHeaders());

    response.end("Recurso solicitado");

});

server.listen(PUERTO, ()=>{
    console.log("Servidor escuchando en el puerto "+PUERTO);
});
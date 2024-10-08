/*Para crear nuestro primer servidor debemos importar este modulo*/
var http = require('http');
//console.log(http);
const servidor = http.createServer((request, response)=>{
    //Terminamos la respuesta
    console.log("Solicitud nueva");
    response.end("Hola Mundo");
});

//Se pone en estado de escucha, para las peticiones
servidor.listen(3000, ()=>{
    console.log("El servidor esta en estado de escucha");
});
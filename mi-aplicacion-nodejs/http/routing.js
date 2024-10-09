const http = require("http");
const { infoCursos } = require("./data/cursos.js");

//obtengo los cursos exportados
const cursos = require("./data/cursos.js").infoCursos;

const servidor = http.createServer((req, res)=>{
    //Extraigo el verbo http
    const {method} = req;

    switch(method){
        case 'GET':
            return manejarSolicitudGET(req,res); 
        case 'POST':
            return manejarSolicitudPOST(req,res);
        default:
            console.log("El metodo no es manejado por el servidor : "+ method);
    }
});

function manejarSolicitudGET(req, res){
    const {url} = req;
    
    //Si estamos en al pagina inicial
    if(url === "/"){
        res.statusCode = 200;
        res.end("Bienvenido a mi primer servidor y API con Node");
    }

    //Si la url es /cursos,  devuelvo los datos
    else if(url === "/cursos"){
        res.statusCode = 200;
        res.end(JSON.stringify(infoCursos)); // mando los datos en un JSON
    }

    else if(url === "/cursos/programacion"){
        res.statusCode = 200;
        res.end(JSON.stringify(infoCursos.programacion));
    }

    res.statusCode = 404;
    res.end("No se halla dicho recurso");

}

function manejarSolicitudPOST(req,res){
    const {url} = req;

    if(url === "/cursos/programacion"){
        res.statusCode = 200;
        res.end(`Solicitud POST hecho en ${url}`)
    }

}

const PUERTO = 4000;
servidor.listen(PUERTO, ()=>{
    console.log("Servidor en estado de escucha")
});


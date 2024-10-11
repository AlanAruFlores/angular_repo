/*
    API BASICA con NODE JS
*/

const http = require("http");

//obtengo los cursos exportados
const { infoCursos } = require("./data/cursos.js");


const servidor = http.createServer((req, res)=>{
    //Extraigo el verbo http
    const {method,url} = req;

    switch(method){
        case 'GET':
            return manejarSolicitudGET(req,res); 
        case 'POST':
            return manejarSolicitudPOST(req,res);
        default:
            res.statusCode = 501; // Estado si no se encuentra el recurso en el servidor 
            res.end(`El recurso a acceder ${url} no existe`)
            console.log("El metodo no es manejado por el servidor : "+ method);
    }
});

function manejarSolicitudGET(req, res){
    const {url} = req;
    
    //Si estamos en al pagina inicial
    if(url === "/"){
        res.writeHeader(200, {"Content-Type":"application/json"}); // (Opcional) establezco el tipo de cabecera y su codigo de estado 
       // res.statusCode = 200; No es necesario incluirlo ya que por defecto es 200
        return res.end("Bienvenido a mi primer servidor y API con Node");
    }

    //Si la url es /cursos,  devuelvo los datos
    else if(url === "/cursos"){
       // res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos)); // mando los datos en un JSON
    }

    else if(url === "/cursos/programacion"){
       // res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos.programacion));
    }

    res.statusCode = 401;
    res.end("No se halla dicho recurso");

}

function manejarSolicitudPOST(req,res){
    const {url} = req;

    if(url === "/cursos/programacion"){
        //res.statusCode = 200;
        let dataJson;
        req.on("data", contenido=>{
            dataJson = contenido.toString();
        });

        req.on("end", ()=>{

            //Me devuelve un json en string
            console.log(dataJson);
            console.log(typeof dataJson);

            //Parseo el json string en un objeto de JS
            dataJson = JSON.parse(''+dataJson+'');
            console.log(typeof dataJson);
            console.log(dataJson.titulo);
        });

        return res.end(`Solicitud POST hecho en ${url}`)
    }

    res.statusCode = 401;
    res.end("No se halla dicho recurso");

}

const PUERTO = 4000;
servidor.listen(PUERTO, ()=>{
    console.log("Servidor en estado de escucha")
});


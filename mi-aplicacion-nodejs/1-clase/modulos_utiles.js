//lodash: Simplifica el manejo y edicion de objetos, estructuras y arrays.
var _ = require("lodash");

let x  = {
    nombre :"Jaime",
    apellido : "Rios"
};

let y  = {
    nombre :"Luis",
    apellido : "Diaz"
};

let array = [
    {
        nombre:"Luis",
        apellido: "Diaz",
        edad: 24
    },
    {
        nombre:"Karl",
        apellido: "Diaz",
        edad: 44
    },
    
    {
        nombre:"Jaime",
        apellido: "Rios",
        edad: 20
    }
]

_.times(3 ,  ()=>console.log("Hola"));


//Find : busca el elemento a bsucar dentro de un arreglo, mapeando los atributos del objeto mandado en el 2do argumento
let resultado =  _.find(array,y);
console.log(resultado);

//Asign : une la propiedad de 2 o mas objetos en un solo objeto

let nombreObj = {
    nombre : "Marian"
};
let edadObj = {
    edad: 20
};

let resultadoObj = _.assign(nombreObj,edadObj);
console.log(resultadoObj);


/*Yargs: Permite manipular argumentos de una manera intuitiva.
Ejemplo
node  aplicacion.js --nombreParametro=valor

*/

const argv =  require("yargs").argv;

if(argv.entorno == "desarrollo"){
    console.log("Entorno del desarollador");
}

if(argv.entorno == "prueba"){
    console.log("Entorno de prueba");
}

/*
    File System: permite trabajar con el sistema de archivos
*/

const f = require("fs");

console.log("file system module");

f.readdir("./", (error, archivos)=>{
    archivos.forEach(archivo => {
        console.log(archivo);
    })
});

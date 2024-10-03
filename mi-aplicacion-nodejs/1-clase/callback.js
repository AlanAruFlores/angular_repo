// Callback funciona que se invoca como retorno de la llamada princiapl

/*
    La ejecucion de todo el archivo, excluyendo los arrow functions de los set time out , demoran
    mucho menos que dichos metodos
*/

console.log("Comienzo de la ejecucion")

setTimeout(()=>{
    console.log("Ejecutando settimeout 1")
}, 1);
setTimeout(()=>{
    console.log("Ejecutando settimeout 2")
},1);

console.log("Finalizacion de la ejecucion")

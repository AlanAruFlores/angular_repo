
//1ra forma 
module.exports = {
    NUMERO_MAXIMO : 10,
    saludar:()=>{
        console.log("Hola desde mi modulo");
    },
    sumar: (a,b) => a+b
}

//2da forma
module.exports.despedida = function(){
    console.log("chau");
}
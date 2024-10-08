/*
    JSON es un formato que permite guardar objetos de js en texto
*/
const personaJson=require("./persona.json"); //cuando importamos , JS lo parse a un objeto
console.log(personaJson); // Muestra el json
console.log(personaJson.nombre);
console.log(personaJson.apellido);
console.log(personaJson.edad);

//stringify --> transforma un objeto a un objeto json

const objUsuario =  {
    usuario : "UsuarioNombre",
    password: "Password1234"
};
let objJSON = JSON.stringify(objUsuario);
console.log(typeof objJSON);
console.log(objJSON);

//parse --> transforma json a objeto
let objUsuarioObjeto = JSON.parse(objJSON);
console.log(typeof objUsuarioObjeto);
console.log(objUsuarioObjeto);

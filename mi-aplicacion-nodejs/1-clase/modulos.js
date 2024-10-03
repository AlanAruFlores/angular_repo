/*Para usar exportar modulos de terceros en un archivo js, nodejs nos provee la palabra reservada:

 1) required(nombre modulo)
 2) hacer modulos propios
Nota: Este modulo debe existir dentro del sitio oficial de npm
*/

//Ejemplo de "required: "

//Modulo 'os' del sitio NPM
const os = require('os');

//Informacion de la cpu
const cpu  = os.cpus();
console.log(cpu);

//Informacion del hostname
const hostname = os.hostname();
console.log(hostname);

// 2) Usar tu propio modulo
const miModulo = require("./mis_modulos"); // importo mi modulo
const resultado  = miModulo.sumar(10,10);
console.log(resultado);
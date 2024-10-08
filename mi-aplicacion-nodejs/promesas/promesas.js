/*Una promesa es un objeto que representa el eventual resultado o error de una operacion asincrona 
    Dicha promesa puede estar en 2 estados:
    .CUMPLIDA
    .RECHAZADA

  Se hace uso de una funcion callback.

  Las promesas tienen un metodo:
    then --> el cual podemos decidir que se va a hacer con la promesa si se cumple
*/


const edad = 20;
const miPromise  = new Promise((resolve, reject)=>{
    if(edad > 18)
        resolve({
            mensaje: "Tiene mayor de 18 años"
        });
    else
        reject({
            mensaje: "Eres menor de 18"
        });
});


/*Podemos ejecutar las promesas multiples veces, retornando la mista con la palabra reservada "return" */
miPromise
.then((data)=>{
    console.log(data.mensaje);    
    return miPromise;
})
.then((data)=>{
    console.log(data.mensaje);
})
.catch((data)=>{
    console.warn(data.mensaje);
})



/*Ejemplo */
console.log("EJEMPLO: \n\n")

const productoPedido = {
    nombre: "taza"
};

const ordenarPedido = (producto)=>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(producto.nombre !== "taza"){
                reject("Pedido sin stock");
                return ;
            }
            resolve("Pedido Preparado... ")
        },3000);
    });
}


const mostrarPedido = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Pedido hecho.");
            resolve("Pedido entregado.");
        },1000);
    })
}

ordenarPedido(productoPedido)
.then(data=>{
    console.log(data);
    return mostrarPedido();
})
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
});












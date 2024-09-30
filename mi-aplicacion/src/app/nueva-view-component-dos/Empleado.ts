export class Empleado{
    id:number;
    nombre:string;
    apellido:string = "Apellido No Especificado";
    edad:number;


    constructor(id:number, nombre:string, edad:number ,apellido?:string){
        this.id = id;
        this.nombre = nombre;
        if(apellido != undefined)
            this.apellido = apellido;
        this.edad  = edad;
    }

    get getId(){
        return this.id;
    }
    get getNombre(){
        return this.nombre;
    }
    get getApellido(){
        return this.apellido;
    }
    get getEdad(){
       return this.edad;
    }

}
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/*Component es un decorador que indica que la clase es un componente de angular  */
@Component({
  selector: 'app-root', // indica el nombre del selector componente
  templateUrl: './app.component.html', // el html del componente
  styleUrls: ['./app.component.css'] // el css del componente 
})
export class AppComponent {
  title = 'mi-aplicacion';
  nombreUsuario = "Alan";  
  nombreEnLaVista = undefined;

  formRegistrarse:FormGroup;

  router: Router;


  constructor(formBuilder:FormBuilder, router:Router, private httpClient:HttpClient){
    this.formRegistrarse = formBuilder.group({
      nombre: new FormControl('',Validators.required),
      apellido: new FormControl('',Validators.required),
      correo: new FormControl('',[Validators.required,Validators.email]),
      edad: new FormControl('',Validators.required)
    });

    this.router = router;
  }

  /*Event Bindings que se van a comunicar con la vista por medio de eventos */
  mostrarAlerta(){
    alert("Hola desde una alerta");
  }

  imprimirNombreEnLaVista(){
    this.nombreEnLaVista = "Nahuel";
  }


  registrarse():void{
      let nombre:string = this.formRegistrarse.get("nombre").value;
      let apellido:string = this.formRegistrarse.get("apellido").value;
      let correo:string = this.formRegistrarse.get("correo").value;
      let edad:number = this.formRegistrarse.get("edad").value;

      /*Cuando tengamos alguna api creada, para registrar el usuario la haremos de la siguiente forma: */
      this.httpClient.post("http://localhost:3000/api/crear-usuario",{
          'nombre': nombre,
          'apellido': apellido,
          'correo': correo,
          'edad': edad
      }).subscribe(value=>{
        console.log(JSON.stringify(value)); //Imprimo la respuesta
      });
      


      alert(`Registrado: \n
        nombre: ${nombre} \n
        apellido: ${apellido} \n
        correo : ${correo} \n
        edad : ${edad}`);
  }

  renderizarIndirectamenteNuevaViewComponente():void{
    this.router.navigate(["/nuevaViewUno"]);
  }

  
  renderizarIndirectamenteNuevaViewComponenteDOS():void{
    this.router.navigate(["/nuevaViewDos"]);
  }
}

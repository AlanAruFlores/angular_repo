import { Component } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';

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


  constructor(formBuilder:FormBuilder){
    this.formRegistrarse = formBuilder.group({
      nombre: new FormControl('',Validators.required),
      apellido: new FormControl('',Validators.required),
      correo: new FormControl('',[Validators.required,Validators.email]),
      edad: new FormControl('',Validators.required)
    });
  }

  /*Event Bindings que se van a comunicar con la vista por medio de eventos */
  mostrarAlerta(){
    alert("Hola desde una alerta");
  }

  imprimirNombreEnLaVista(){
    this.nombreEnLaVista = "Nahuel";
  }


  registrarse(){

      alert("Registrado");
  }
}

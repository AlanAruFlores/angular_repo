import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Respuesta } from './Respuesta';
import { Observable } from 'rxjs';


/*Ejemplo de como consumir una api
  Para ello debemos tener una clase que extienda de httpclient
*/
@Component({
  selector: 'app-nueva-view-component',
  templateUrl: './nueva-view-component.component.html',
  styleUrls: ['./nueva-view-component.component.css']
})
export class NuevaViewComponentComponent implements OnInit {

  imagenUrl: string;
  

  constructor(private httpClient:HttpClient) {
    this.imagenUrl = undefined;
   }

  ngOnInit(): void {
  }

  generarNuevaImagen():void{
    console.log("Haciendo solicitud a la api");

    //Hago la solicitud a la api

    /*
      Los elementos de la solicitud a una API, son:
      1. url endpoint a consumir
      2. cual es tu request y response
      3. cual es el verbo http (get)
    */

    //El retorno de este es un observable
    /*
      El observable permite enterarnos cuando se produce un evento. 
      Es deciren lugar de estar consultando a la fuente de infromacion si sucedio este evento, 
      obsevable permite que me avise la fuente de informacion para asi no estar consultando si paso dicho evento
    */
    
      /*1ra forma (observable implicito) */

    /*
    this.httpClient.get("https://api.thecatapi.com/v1/images/search?format=json")
    .subscribe(value=>{
      console.log(value);
      console.log(value[0].url);   
      this.imagenUrl = value[0].url;
    });*/

    /* 2da forma (observable explicito) */

    let respuestaObservable:Observable<any>  = this.httpClient.get("https://api.thecatapi.com/v1/images/search?format=json");
   
    //El metodo subscribe recibe una lambda para trabajar con la respuesta de la api y se queda en estado de escucha
    respuestaObservable.subscribe((json) => {
      //Obtenemos y nos enteramos de la respuesta de la API 
      console.log(json);
    });

  }


}

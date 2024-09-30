import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevaViewComponentComponent } from './nueva-view-component/nueva-view-component.component';
import { NuevaViewComponentDosComponent } from './nueva-view-component-dos/nueva-view-component-dos.component';
import { HttpClientModule } from '@angular/common/http';

/*Aca vamos a gestionar los modulos necesarios para la inyeccion de dependencias.
Si hacemos uso de un modulo no definido aca, entonces falla la aplicacion */
@NgModule({
  declarations: [
    AppComponent,
    NuevaViewComponentComponent,
    NuevaViewComponentDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

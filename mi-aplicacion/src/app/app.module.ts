import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NuevaViewComponentComponent } from './nueva-view-component/nueva-view-component.component';
import { NuevaViewComponentDosComponent } from './nueva-view-component-dos/nueva-view-component-dos.component'; // Importa esto
@NgModule({
  declarations: [
    AppComponent,
    NuevaViewComponentComponent,
    NuevaViewComponentDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

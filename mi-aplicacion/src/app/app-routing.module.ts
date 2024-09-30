import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaViewComponentComponent } from './nueva-view-component/nueva-view-component.component';
import { NuevaViewComponentDosComponent } from './nueva-view-component-dos/nueva-view-component-dos.component';
const routes: Routes = [ //Array de las rutas que vamos a tener en el contexto de nuestro componente
  {path:"nuevaViewUno", component: NuevaViewComponentComponent},
  {path:"nuevaViewDos", component: NuevaViewComponentDosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], /*Aca pasamos todas las rutas que va a interpretar este componente */
  exports: [RouterModule]
})
export class AppRoutingModule { }

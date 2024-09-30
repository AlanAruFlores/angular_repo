import { Component, OnInit } from '@angular/core';
import { Empleado } from './Empleado';
@Component({
  selector: 'app-nueva-view-component-dos',
  templateUrl: './nueva-view-component-dos.component.html',
  styleUrls: ['./nueva-view-component-dos.component.css']
})
export class NuevaViewComponentDosComponent implements OnInit {

  empleados:Empleado[];


  constructor() {
    this.empleados = [
      new Empleado(1,"Marian", 24),
      new Empleado(2,"Karl", 44),
      new Empleado(3,"Josep", 14)
    ];
   }

  ngOnInit(): void {
  }

}

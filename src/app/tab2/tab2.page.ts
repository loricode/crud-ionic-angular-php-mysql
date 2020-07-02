import { Component,OnInit } from '@angular/core';
import {AlumnoService} from '../servicios/AlumnoService';
import {alumno} from '../modelo/alumno';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit  {

  objeto:alumno = { id:"", nombre:"",  telefono:"" }
  bandera=true;
  alumnos :alumno[] = [];
   
constructor(public servicio :AlumnoService) {  }

  ngOnInit() {
    this.listarAlumno();  
  }

listarAlumno(){
  this.servicio.getAlumnos().subscribe(res => { 
     for(let i=0;i<res.length;i++){
           this.alumnos.push(res[i]);
     }
 })
}

agregar() {   
if(this.bandera){
  this.servicio.agregarAlumno(this.objeto).subscribe( res => {
   console.log(res)
   this.alumnos=[];
   this.objeto.nombre='';
   this.objeto.telefono='';
   this.listarAlumno()
 })
}else{
   this.servicio.actualizarAlumno(this.objeto).subscribe( resp => {
    this.alumnos=[];
    this.objeto.id='';
    this.objeto.nombre='';
    this.objeto.telefono='';
    this.bandera=true;  
    console.log(resp)
    this.listarAlumno() 
 })} 
}
             
 borrar(id:string){
   let objid = {id}
   this.servicio.borrarAlumno(objid).subscribe(resp => {
   this.alumnos=[];
   console.log(resp) 
   this.listarAlumno()
  })  
} 

editar(id:string, nombre:string, telefono:string){
   this.objeto.id = id;
   this.objeto.nombre = nombre;
   this.objeto.telefono = telefono;
   this.bandera = false;
}

}  

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {alumno} from '../modelo/alumno';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  url = 'http://localhost/apiAlumno/listar.php';
  url2 ='http://localhost/apiAlumno/crear_alumno.php';
  url3 ='http://localhost/apiAlumno/eliminar.php';
  url4 ='http://localhost/apiAlumno/actualizar.php';

  constructor(public http: HttpClient) { }

  getAlumnos() {
    return this.http.get<[]>(this.url);
  }

  agregarAlumno(obj :alumno){
    return this.http.post<any>(this.url2, JSON.stringify(obj));
  }

  borrarAlumno(id:any){
    return this.http.post<any>(this.url3, JSON.stringify(id));
  }

  actualizarAlumno(obj:alumno){
    return this.http.post(this.url4, JSON.stringify(obj));
  }

}

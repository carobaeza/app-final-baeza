import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AlumnoService{
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    private alumnoUrl = 'http://localhost:3002/api/modules/alumnos/';
   

    constructor(private httpClient: HttpClient){}

    getAlumnos(){
        return this.httpClient.get(this.alumnoUrl + 'alumno');
    }

    guardarAlumno(alumno: any){
        return this.httpClient.post(this.alumnoUrl + 'alumno', JSON.stringify(alumno), this.httpOptions); 
    }

    editarAlumno(idAlumno, alumno){
        return this.httpClient.put(this.alumnoUrl + 'alumno/' + idAlumno, JSON.stringify(alumno), this.httpOptions);
    }

    borrarAlumno( idAlumno ){
        return this.httpClient.delete(this.alumnoUrl + 'alumno/' + idAlumno, this.httpOptions);
      }

    getAlumnoById(idAlumno: String){
        return this.httpClient.get(this.alumnoUrl + 'alumnoId/' + idAlumno);
    }  
    
      
} 	
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../servicios/alumno.service';

@Component({
  selector: 'app-muestra-alumno',
  templateUrl: './muestra-alumno.component.html',
  styleUrls: ['./muestra-alumno.component.css']
})
export class MuestraAlumnoComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'direccion', 'alumno','fecha', 'editar', 'eliminar'];
  dataSource: any[] = [];
idAlumno: any;

  constructor(private router:Router,private conectaService: AlumnoService,private route: ActivatedRoute) { }

  parametro:any;

  ngOnInit(): void {

  this.getAlumnos();
  }


  
  

  getAlumnos(){
    this.conectaService.getAlumnos().subscribe((data: any) => {
      //debugger;
      this.dataSource = data;
    });
  }
  

  goToEditar(idAlumno) {		
        this.router.navigate(["/alumno/crearAlumno/" + idAlumno]);
      }

  goToEliminar(alumno:any) {		

  this.idAlumno = alumno._id;
  this.conectaService.borrarAlumno(this.idAlumno).subscribe( result  => {
    console.log("Alumno borrado: ", alumno)
  });
  this.getAlumnos();

}
        
  
  



}


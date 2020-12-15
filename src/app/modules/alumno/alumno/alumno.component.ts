import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../servicios/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  idAlumno: String;
  
  alumnoForm: FormGroup;
 
  
  constructor(private fb: FormBuilder, private alumnoService: AlumnoService,private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.initForm();
    this.route.paramMap.subscribe((param) => {
      this.idAlumno = param.get('id');

      if (this.idAlumno !== 'new'){
        this.getAlumnoById(this.idAlumno);
      }
    });
  }

  getAlumnoById(idAlumno: String){
    this.alumnoService.getAlumnoById(idAlumno).subscribe((data) =>{
      let alumnoId = data;

      this.alumnoForm.patchValue(alumnoId);
    });
  }

  initForm(){
    this.alumnoForm = this.fb.group({
      nombre: [ '' ],
      direccion: [ '' ],
      alumno: [],
      fecha: [ '' ]
    });
  }

  cargarAlumno() {
    if (this.idAlumno ){
      this.alumnoService.editarAlumno(this.idAlumno, this.alumnoForm.value).subscribe((alumno) => {
      });
    } else {
      this.alumnoService.guardarAlumno(this.alumnoForm.value).subscribe((alumno) => {
        
        console.log("se crea alumno");
      });
    }
    this.router.navigate(['/alumno/mostrarAlumno']);
  }
}



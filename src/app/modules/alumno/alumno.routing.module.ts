import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuestraAlumnoComponent } from './muestra-alumno/muestra-alumno.component';
import { AlumnoComponent } from './alumno/alumno.component';

const routes: Routes = [
    {
        path: '',        
        children: [
        {
            path: 'mostrarAlumno',
            component: MuestraAlumnoComponent
        },
        {
            path: 'crearAlumno',
            component: AlumnoComponent
        },
        {
            path: 'crearAlumno/:id',
            component: AlumnoComponent
        },
    ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AlumnoRoutingModule { }
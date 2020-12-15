import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuestraEnvioComponent } from './muestra-envio/muestra-envio.component';
import { EnvioComponent } from './envio/envio.component';

const routes: Routes = [
    {
        path: '',        
        children: [
        {
            path: 'mostrarEnvio',
            component: MuestraEnvioComponent
        },
        {
            path: 'crearEnvio',
            component: EnvioComponent
        },
        {
            path: 'crearEnvio/:id',
            component: EnvioComponent
        },
    ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EnvioRoutingModule { }
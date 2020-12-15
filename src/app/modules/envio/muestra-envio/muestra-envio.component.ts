import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnvioService } from '../servicios/envio.service';

@Component({
  selector: 'app-muestra-envio',
  templateUrl: './muestra-envio.component.html',
  styleUrls: ['./muestra-envio.component.css']
})
export class MuestraEnvioComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'direccion','destinatario', 'direDestinatario', 'descripcion','fecha', 'editar', 'eliminar'];
  dataSource: any[] = [];
idEnvio: any;

  constructor(private router:Router,private conectaService: EnvioService,private route: ActivatedRoute) { }

  parametro:any;

  ngOnInit(): void {

  this.getEnvios();
  }


  
  

  getEnvios(){
    this.conectaService.getEnvios().subscribe((data: any) => {
      //debugger;
      this.dataSource = data;
    });
  }
  

  goToEditar(idEnvio) {		
        this.router.navigate(["/envio/crearEnvio/" + idEnvio]);
      }

  goToEliminar(envio:any) {		

  this.idEnvio = envio._id;
  this.conectaService.borrarEnvio(this.idEnvio).subscribe( result  => {
    console.log("Envio borrado: ", envio)
  });
  this.getEnvios();

}
        
  
  



}


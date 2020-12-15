import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnvioService } from '../servicios/envio.service';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {

  idEnvio: String;
  
  envioForm: FormGroup;
 
  
  constructor(private fb: FormBuilder, private envioService: EnvioService,private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.initForm();
    this.route.paramMap.subscribe((param) => {
      this.idEnvio = param.get('id');

      if (this.idEnvio !== 'new'){
        this.getEnvioById(this.idEnvio);
      }
    });
  }

  getEnvioById(idEnvio: String){
    this.envioService.getEnvioById(idEnvio).subscribe((data) =>{
      let envioId = data;

      this.envioForm.patchValue(envioId);
    });
  }

  initForm(){
    this.envioForm = this.fb.group({
      nombre: [ '' ],
      direccion: [ '' ],
      destinatario:[ '' ],
      direDestinatario:[ '' ],
      descripcion: [],
      fecha: [ '' ]
    });
  }

  cargarEnvio() {
    if (this.idEnvio ){
      this.envioService.editarEnvio(this.idEnvio, this.envioForm.value).subscribe((envio) => {
      });
    } else {
      this.envioService.guardarEnvio(this.envioForm.value).subscribe((envio) => {
        
        console.log("se crea envio");
      });
    }
    this.router.navigate(['/envio/mostrarEnvio']);
  }
}



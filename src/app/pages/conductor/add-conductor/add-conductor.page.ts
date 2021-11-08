import { Component, OnInit } from '@angular/core';
import { ConductoresService, Conductor} from '../../../services/conductores.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-conductor',
  templateUrl: './add-conductor.page.html',
  styleUrls: ['./add-conductor.page.scss'],
})
export class AddConductorPage implements OnInit {
  
  tituloUp = false;
  titulo = 'Conductor';
  conductor: Conductor = {
    Nombre: '',
    Descripcion: '',
    Edad: null,
    Destino: '',
    NumeroTelefonico: null, 
  }
  

  constructor(
    private conductoresService: ConductoresService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formsModule: FormsModule,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( (paramMap) => {
      if (paramMap.get('conductorId')) {
        this.tituloUp = true;
        this.conductoresService
          .listarConductoresPorId(paramMap.get('conductorId'))
          .subscribe((res) =>
          {this.conductor = res; })
      }
    } );
  }

  //agregar conductor

  guardarConductor() {
    this.conductoresService
      .agergarConductores(
        this.conductor.Nombre,
        this.conductor.Descripcion,
        this.conductor.Edad,
        this.conductor.Destino,
        this.conductor.NumeroTelefonico,
      )
      .subscribe(
        (res) => {
          this.router.navigate(['/conductores']);
        },

        (err) => console.log(err)
      );

    console.log(
      this.conductor.Nombre,
      this.conductor.Descripcion,
      this.conductor.Edad,
      this.conductor.Destino,
      this.conductor.NumeroTelefonico,
    );
  }

  //actualizar conductor

  actualizarConductor(){
    this.conductoresService.actualizarConductores(this.conductor.id, {
      Nombre: this.conductor.Nombre,
      Descripcion: this.conductor.Descripcion,
      Edad: this.conductor.Edad,
      Destino: this.conductor.Destino,
      NumeroTelefonico: this.conductor.NumeroTelefonico
    }).subscribe(res => {
      this.router.navigate(['/conductores'])
    })
  }

  async Redireccionar() {
    const alerta = await this.alertController.create({
      header: 'Agregar conductor',
      message: 'Estas seguro que deseas agregar a este conductor?',
      buttons: [ {
          text: 'Si',
          handler: () => {
            this.guardarConductor();
          }
        }, 'No']
      
    });

    await alerta.present();

    
  }

  async Redireccionar1() {
    const alerta1 = await this.alertController.create({
      header: 'Actualizar conductor',
      message: 'Estas seguro que deseas actualizar a este conductor?',
      buttons: [ {
          text: 'Si',
          handler: () => {
            this.actualizarConductor();
          }
        }, 'No']
      
    });

    await alerta1.present();

    
  }
}

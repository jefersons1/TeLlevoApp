import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ConductoresService } from '../../services/conductores.service';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.page.scss'],
})
export class RegPage implements OnInit {


  titulo ="Registro";
  constructor(private activatedRouted: ActivatedRoute, private router: Router, private alertController: AlertController, private conductorService: ConductoresService) { }

  ngOnInit() {
  }

  async RegistroExito() {
    const alerta = await this.alertController.create({
      header: 'Exito!',
      message: 'Se ha registrado correctamente',
      buttons: [ {
          text: 'Confirmar',
          handler: () => {
            //console.log('ELIMINADO');
    
            this.router.navigate(["/auth"]);
          }
        }
      ]
    });

    await alerta.present();
  }

  async guardarUsuario(Nombres, Usuario, Contrasenia){
      const alerta = await this.alertController.create({
      header: 'Exito!',
      message: 'Se ha registrado correctamente',
      buttons: [ {
          text: 'Confirmar',
          handler: () => {
            this.conductorService.agregarUsuario(Nombres.value, Usuario.value, Contrasenia.value)
            .subscribe( (res) => console.log(res),
            (err) =>console.error(err) )

            this.router.navigate(["/auth"]);
          }
        }
      ]
    });
    await alerta.present();
  }
}

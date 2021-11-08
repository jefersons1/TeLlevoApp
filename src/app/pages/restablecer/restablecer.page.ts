import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  titulo ="Restablecer";
  constructor(private activatedRouted: ActivatedRoute, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async Redireccionar() {
    const alerta = await this.alertController.create({
      header: 'Todo listo!',
      message: 'Se ha enviado un correo para restablecer la contraseña',
      buttons: [ {
          text: 'Confirmo',
          handler: () => {
            //console.log('Redireccionando');
            
            this.router.navigate(["/auth"]);
          }
        }
      ]
    });

    await alerta.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  titulo ="Bienvenido";


  constructor(private activatedRouted: ActivatedRoute, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async Redireccionar() {
    const alerta = await this.alertController.create({
      header: 'Cerrar sesión',
      message: 'Estas seguro que deseas cerrar la sesión?',
      buttons: [ {
          text: 'Confirmo',
          handler: () => {
            
            this.router.navigate(["/home"]);
          }
        }, 'Cancelar']
      
    });

    await alerta.present();
  }

}

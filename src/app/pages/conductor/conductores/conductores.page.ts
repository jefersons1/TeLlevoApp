import { Component, OnInit } from '@angular/core';
import { ConductoresService } from '../../../services/conductores.service';
import { AlertController} from "@ionic/angular";
import { Button } from 'selenium-webdriver';


@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.page.html',
  styleUrls: ['./conductores.page.scss'],
})
export class ConductoresPage implements OnInit {

  
  conductores: any = []
  
  titulo= "Conductores";
  constructor(private conductoresService: ConductoresService, private alertController: AlertController) {}

  cargarConductores(){
    this.conductoresService.listarConductores().subscribe(
      (res) => {
        console.log(res)
        this.conductores = res;
      },
      (err) => console.log(err)
    );
  }
   
  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.cargarConductores();

  }

  async eliminarConductor(id){
    const alert = await this.alertController.create({
      header: 'Eliminar conductor',
      message: 'Estas seguro que quieres eliminar este conductor?',
      buttons: [{
        text: 'Si, borrar',
        handler: () =>{
          console.log(id)
            this.conductoresService.eliminarConductores(id).subscribe
            (res => {
            this.cargarConductores(); 
          },
            err => console.error(err)
    )
        }
      }, 'Cancelar']
      
    });

    await alert.present();
    
  }

  editarConductor(id: string){
    console.log(id)
  }
}

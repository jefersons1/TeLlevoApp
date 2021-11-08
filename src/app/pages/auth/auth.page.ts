import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConductoresService, Conductor } from '../../services/conductores.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {


  Usuarios: any = []

  credenciales: any = {

    Usuario: '',
    Contrasenia: ''

  }

  Bienvenida: any = {

    
    NombreUsuario: 'a'

  }
  

  titulo ="Autenticacion";
  constructor(public navCtrl: NavController,
              private conductoresService: ConductoresService, 
              private router: Router,
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.conductoresService.listarUsuario().subscribe(
      (res) =>{
        this.Usuarios = res;
      },
      (err) => console.log(err)
    )
  }

//  async Login (){
//     aqui va el ciclo
//   }



}

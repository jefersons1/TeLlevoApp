import { Component, OnInit } from '@angular/core';
import {
  ConductoresService,
  Conductor,
} from '../../services/conductores.service';
import { AlertController } from '@ionic/angular';
import { Button } from 'selenium-webdriver';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  conductores: any = [];

  tituloUp = false;
  titulo = 'Chat en vivo';

  conductor: Conductor = {
    Nombre: '',
    Descripcion: '',
    Edad: null,
    Destino: '',
    NumeroTelefonico: null,
  };
  constructor(
    private conductoresService: ConductoresService,
    private alertController: AlertController,
    private router: Router,
    private activatedRoute: ActivatedRoute,

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

  


}

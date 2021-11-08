import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddConductorPageRoutingModule } from './add-conductor-routing.module';

import { AddConductorPage } from './add-conductor.page';
import { ComponentsModule } from 'src/app/components/components.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddConductorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddConductorPage]
})
export class AddConductorPageModule {}

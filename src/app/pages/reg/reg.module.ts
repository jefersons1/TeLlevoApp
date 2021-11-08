import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegPageRoutingModule } from './reg-routing.module';

import { RegPage } from './reg.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegPage]
})
export class RegPageModule {}

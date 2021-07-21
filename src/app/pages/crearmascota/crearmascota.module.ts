import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearmascotaPageRoutingModule } from './crearmascota-routing.module';

import { CrearmascotaPage } from './crearmascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearmascotaPageRoutingModule
  ],
  declarations: [CrearmascotaPage]
})
export class CrearmascotaPageModule {}

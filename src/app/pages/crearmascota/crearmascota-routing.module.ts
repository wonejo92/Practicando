import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearmascotaPage } from './crearmascota.page';

const routes: Routes = [
  {
    path: '',
    component: CrearmascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearmascotaPageRoutingModule {}

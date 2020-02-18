import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrincadeiraPage } from './brincadeira.page';

const routes: Routes = [
  {
    path: '',
    component: BrincadeiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrincadeiraPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrincadeiraPageRoutingModule } from './brincadeira-routing.module';

import { BrincadeiraPage } from './brincadeira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrincadeiraPageRoutingModule
  ],
  declarations: [BrincadeiraPage]
})
export class BrincadeiraPageModule {}

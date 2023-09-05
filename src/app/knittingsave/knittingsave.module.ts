import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KnittingsavePageRoutingModule } from './knittingsave-routing.module';

import { KnittingsavePage } from './knittingsave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KnittingsavePageRoutingModule,ReactiveFormsModule
  ],
  declarations: [KnittingsavePage]
})
export class KnittingsavePageModule {}

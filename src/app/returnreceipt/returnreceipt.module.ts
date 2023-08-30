import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnreceiptPageRoutingModule } from './returnreceipt-routing.module';

import { ReturnreceiptPage } from './returnreceipt.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReturnreceiptPageRoutingModule,
    ReactiveFormsModule,
    IonicSelectableModule
  ],
  declarations: [ReturnreceiptPage]
})
export class ReturnreceiptPageModule {}

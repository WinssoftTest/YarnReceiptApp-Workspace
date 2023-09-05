import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KnittingreceiptPageRoutingModule } from './knittingreceipt-routing.module';

import { KnittingreceiptPage } from './knittingreceipt.page';
import {   IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KnittingreceiptPageRoutingModule,ReactiveFormsModule,IonicSelectableModule
  ],
  declarations: [KnittingreceiptPage]
})
export class KnittingreceiptPageModule {}

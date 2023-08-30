import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorespurchasereceiptPageRoutingModule } from './storespurchasereceipt-routing.module';

import { StorespurchasereceiptPage } from './storespurchasereceipt.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorespurchasereceiptPageRoutingModule, ReactiveFormsModule,IonicSelectableModule
  ],
  declarations: [StorespurchasereceiptPage]
})
export class StorespurchasereceiptPageModule {}

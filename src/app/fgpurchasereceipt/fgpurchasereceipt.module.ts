import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FgpurchasereceiptPageRoutingModule } from './fgpurchasereceipt-routing.module';

import { FgpurchasereceiptPage } from './fgpurchasereceipt.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    FgpurchasereceiptPageRoutingModule,IonicSelectableModule
  ],
  declarations: [FgpurchasereceiptPage]
})
export class FgpurchasereceiptPageModule {}

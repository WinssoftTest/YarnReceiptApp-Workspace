import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceiptOpenFormPageRoutingModule } from './receipt-open-form-routing.module';

import { ReceiptOpenFormPage } from './receipt-open-form.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ReceiptOpenFormPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [ReceiptOpenFormPage]
})
export class ReceiptOpenFormPageModule {}

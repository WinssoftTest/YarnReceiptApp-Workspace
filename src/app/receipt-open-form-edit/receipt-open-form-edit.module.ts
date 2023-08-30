import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceiptOpenFormEditPageRoutingModule } from './receipt-open-form-edit-routing.module';

import { ReceiptOpenFormEditPage } from './receipt-open-form-edit.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceiptOpenFormEditPageRoutingModule,
    ReactiveFormsModule,
    IonicSelectableModule
  ],
  declarations: [ReceiptOpenFormEditPage]
})
export class ReceiptOpenFormEditPageModule {}

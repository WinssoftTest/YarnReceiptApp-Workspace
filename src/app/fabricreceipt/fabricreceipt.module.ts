import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabricreceiptPageRoutingModule } from './fabricreceipt-routing.module';

import { FabricreceiptPage } from './fabricreceipt.page';
import {   IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,IonicSelectableModule,
    IonicModule,
    FabricreceiptPageRoutingModule
  ],
  declarations: [FabricreceiptPage]
})
export class FabricreceiptPageModule {}

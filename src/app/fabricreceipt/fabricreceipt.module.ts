import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabricreceiptPageRoutingModule } from './fabricreceipt-routing.module';

import { FabricreceiptPage } from './fabricreceipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabricreceiptPageRoutingModule
  ],
  declarations: [FabricreceiptPage]
})
export class FabricreceiptPageModule {}

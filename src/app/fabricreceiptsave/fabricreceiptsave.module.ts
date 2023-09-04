import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabricreceiptsavePageRoutingModule } from './fabricreceiptsave-routing.module';

import { FabricreceiptsavePage } from './fabricreceiptsave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabricreceiptsavePageRoutingModule,ReactiveFormsModule
  ],
  declarations: [FabricreceiptsavePage]
})
export class FabricreceiptsavePageModule {}

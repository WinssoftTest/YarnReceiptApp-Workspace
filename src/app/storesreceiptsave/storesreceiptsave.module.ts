import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoresreceiptsavePageRoutingModule } from './storesreceiptsave-routing.module';

import { StoresreceiptsavePage } from './storesreceiptsave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoresreceiptsavePageRoutingModule,ReactiveFormsModule
  ],
  declarations: [StoresreceiptsavePage],schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class StoresreceiptsavePageModule {}

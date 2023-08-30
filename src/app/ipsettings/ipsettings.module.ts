import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { IonicModule } from '@ionic/angular';

import { IpsettingsPageRoutingModule } from './ipsettings-routing.module';

import { IpsettingsPage } from './ipsettings.page';
 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IpsettingsPageRoutingModule
  ],
  declarations: [IpsettingsPage]
})
export class IpsettingsPageModule {}

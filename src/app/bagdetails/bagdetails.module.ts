import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BagdetailsPageRoutingModule } from './bagdetails-routing.module';

import { BagdetailsPage } from './bagdetails.page';
import { NumberReplacePipe } from '../number-replace.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BagdetailsPageRoutingModule
  ],
  declarations: [BagdetailsPage,NumberReplacePipe]
})
export class BagdetailsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobworkreceiptPageRoutingModule } from './jobworkreceipt-routing.module';

import { JobworkreceiptPage } from './jobworkreceipt.page';
import { IonicSelectableModule } from 'ionic-selectable';
 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobworkreceiptPageRoutingModule,ReactiveFormsModule,IonicSelectableModule
  ],
  declarations: [JobworkreceiptPage]
})
export class JobworkreceiptPageModule {}

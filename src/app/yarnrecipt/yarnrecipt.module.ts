import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { IonicModule } from '@ionic/angular';
import { YarnreciptPageRoutingModule } from './yarnrecipt-routing.module';
import { YarnreciptPage } from './yarnrecipt.page';
import { IonicSelectableModule } from 'ionic-selectable';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YarnreciptPageRoutingModule,
    ReactiveFormsModule,
    IonicSelectableModule,

  ],
  declarations: [YarnreciptPage]
})
export class YarnreciptPageModule {}

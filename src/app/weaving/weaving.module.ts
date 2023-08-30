import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { IonicModule, IonSelectOption } from '@ionic/angular';
 import { WeavingPageRoutingModule } from './weaving-routing.module';
 import { WeavingPage } from './weaving.page';
import { IonicSelectableModule } from 'ionic-selectable';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeavingPageRoutingModule, ReactiveFormsModule,IonicSelectableModule
  ],
  declarations: [WeavingPage]
})
export class WeavingPageModule {}

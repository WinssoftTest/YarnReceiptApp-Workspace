import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenformcardPageRoutingModule } from './openformcard-routing.module';

import { OpenformcardPage } from './openformcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OpenformcardPageRoutingModule
  ],
  declarations: [OpenformcardPage]
})
export class OpenformcardPageModule {}

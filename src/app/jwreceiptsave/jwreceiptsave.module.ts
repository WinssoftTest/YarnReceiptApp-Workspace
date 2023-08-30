import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
 import { IonicModule } from '@ionic/angular';
 import { JwreceiptsavePageRoutingModule } from './jwreceiptsave-routing.module';
 import { JwreceiptsavePage } from './jwreceiptsave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule,ReactiveFormsModule,
    JwreceiptsavePageRoutingModule
  ],
  declarations: [JwreceiptsavePage]
})
export class JwreceiptsavePageModule {}

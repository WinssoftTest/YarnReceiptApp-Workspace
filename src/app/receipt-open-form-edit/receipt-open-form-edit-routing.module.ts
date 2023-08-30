import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceiptOpenFormEditPage } from './receipt-open-form-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiptOpenFormEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceiptOpenFormEditPageRoutingModule {}

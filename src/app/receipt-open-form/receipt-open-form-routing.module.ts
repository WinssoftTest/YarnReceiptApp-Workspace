import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceiptOpenFormPage } from './receipt-open-form.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiptOpenFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceiptOpenFormPageRoutingModule {}

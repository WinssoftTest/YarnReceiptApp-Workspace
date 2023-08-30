import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FgpurchasereceiptPage } from './fgpurchasereceipt.page';

const routes: Routes = [
  {
    path: '',
    component: FgpurchasereceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FgpurchasereceiptPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KnittingreceiptPage } from './knittingreceipt.page';

const routes: Routes = [
  {
    path: '',
    component: KnittingreceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KnittingreceiptPageRoutingModule {}

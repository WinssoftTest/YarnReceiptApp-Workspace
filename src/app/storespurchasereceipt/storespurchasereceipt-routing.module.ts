import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorespurchasereceiptPage } from './storespurchasereceipt.page';

const routes: Routes = [
  {
    path: '',
    component: StorespurchasereceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorespurchasereceiptPageRoutingModule {}

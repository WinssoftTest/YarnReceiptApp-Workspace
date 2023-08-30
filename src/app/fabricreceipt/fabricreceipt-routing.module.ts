import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabricreceiptPage } from './fabricreceipt.page';

const routes: Routes = [
  {
    path: '',
    component: FabricreceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabricreceiptPageRoutingModule {}

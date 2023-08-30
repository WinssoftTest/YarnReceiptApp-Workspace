import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnreceiptPage } from './returnreceipt.page';

const routes: Routes = [
  {
    path: '',
    component: ReturnreceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnreceiptPageRoutingModule {}

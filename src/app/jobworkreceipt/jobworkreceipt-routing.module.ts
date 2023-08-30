import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobworkreceiptPage } from './jobworkreceipt.page';

const routes: Routes = [
  {
    path: '',
    component: JobworkreceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobworkreceiptPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoresreceiptsavePage } from './storesreceiptsave.page';

const routes: Routes = [
  {
    path: '',
    component: StoresreceiptsavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoresreceiptsavePageRoutingModule {}

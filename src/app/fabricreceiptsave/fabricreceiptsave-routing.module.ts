import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabricreceiptsavePage } from './fabricreceiptsave.page';

const routes: Routes = [
  {
    path: '',
    component: FabricreceiptsavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabricreceiptsavePageRoutingModule {}

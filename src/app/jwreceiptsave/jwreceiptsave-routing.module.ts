import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JwreceiptsavePage } from './jwreceiptsave.page';

const routes: Routes = [
  {
    path: '',
    component: JwreceiptsavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JwreceiptsavePageRoutingModule {}

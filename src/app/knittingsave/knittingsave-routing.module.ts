import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KnittingsavePage } from './knittingsave.page';

const routes: Routes = [
  {
    path: '',
    component: KnittingsavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KnittingsavePageRoutingModule {}

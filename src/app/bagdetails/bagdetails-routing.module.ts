import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BagdetailsPage } from './bagdetails.page';

const routes: Routes = [
  {
    path: '',
    component: BagdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BagdetailsPageRoutingModule {}

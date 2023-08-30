import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenformcardPage } from './openformcard.page';

const routes: Routes = [
  {
    path: '',
    component: OpenformcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenformcardPageRoutingModule {}

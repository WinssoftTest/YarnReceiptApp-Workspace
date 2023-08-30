import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IpsettingsPage } from './ipsettings.page';

const routes: Routes = [
  {
    path: '',
    component: IpsettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IpsettingsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/authguard.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate:[AuthGuard]
  },
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
   {
     path: 'ipsettings',
    loadChildren: () => import('./ipsettings/ipsettings.module').then( m => m.IpsettingsPageModule)
   },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 
  {
    path: 'yarnrecipt',
    loadChildren: () => import('./yarnrecipt/yarnrecipt.module').then( m => m.YarnreciptPageModule)
  },
  {
    path: 'bagdetails',
    loadChildren: () => import('./bagdetails/bagdetails.module').then( m => m.BagdetailsPageModule)
  },
  {
    path: 'returnreceipt',
    loadChildren: () => import('./returnreceipt/returnreceipt.module').then( m => m.ReturnreceiptPageModule)
  },
  {
    path: 'receipt-open-form',
    loadChildren: () => import('./receipt-open-form/receipt-open-form.module').then( m => m.ReceiptOpenFormPageModule)
  },
  {
    path: 'receipt-open-form-edit',
    loadChildren: () => import('./receipt-open-form-edit/receipt-open-form-edit.module').then( m => m.ReceiptOpenFormEditPageModule)
  },
  {
    path: 'openformcard',
    loadChildren: () => import('./openformcard/openformcard.module').then( m => m.OpenformcardPageModule)
  },
  {
    path: 'weaving',
    loadChildren: () => import('./weaving/weaving.module').then( m => m.WeavingPageModule)
  },
  {
    path: 'jobworkreceipt',
    loadChildren: () => import('./jobworkreceipt/jobworkreceipt.module').then( m => m.JobworkreceiptPageModule)
  },
  {
    path: 'jwreceiptsave',
    loadChildren: () => import('./jwreceiptsave/jwreceiptsave.module').then( m => m.JwreceiptsavePageModule)
  },
  {
    path: 'storespurchasereceipt',
    loadChildren: () => import('./storespurchasereceipt/storespurchasereceipt.module').then( m => m.StorespurchasereceiptPageModule)
  },
  {
    path: 'storesreceiptsave',
    loadChildren: () => import('./storesreceiptsave/storesreceiptsave.module').then( m => m.StoresreceiptsavePageModule)
  },
 
  {
    path: 'fgpurchasereceipt',
    loadChildren: () => import('./fgpurchasereceipt/fgpurchasereceipt.module').then( m => m.FgpurchasereceiptPageModule)
  },
  {
    path: 'fabricreceipt',
    loadChildren: () => import('./fabricreceipt/fabricreceipt.module').then( m => m.FabricreceiptPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

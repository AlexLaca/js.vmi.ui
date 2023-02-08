import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LandingPageComponent} from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {
    path: 'request',
    loadChildren: () => import('./modules/vmi/vmi-demand.module').then(m => m.VmiDemandModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VmiRoutingModule { }

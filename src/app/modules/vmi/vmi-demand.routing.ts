import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VmiFormComponent} from './vmi-form/vmi-form.component';
import {VmiListComponent} from './vmi-list/vmi-list.component';
import {VmiDetailComponent} from './vmi-detail/vmi-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'request', component: VmiFormComponent},
      {path: 'list', component: VmiListComponent},
      {path: 'list/:serial', component: VmiDetailComponent},
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VmiDemandRouting {}

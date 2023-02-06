import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VmiFormComponent} from './vmi-form/vmi-form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'demand', component: VmiFormComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VmiDemandRouting {}

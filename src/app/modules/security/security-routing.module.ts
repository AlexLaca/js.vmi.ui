import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SecurityRoutingModule {
}
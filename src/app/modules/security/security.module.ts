import {NgModule} from '@angular/core';
import {SecurityRoutingModule} from './security-routing.module';
import {SharedModule} from '../../@shared/shared-module';
import {LoginComponent} from './login/login.component';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SecurityRoutingModule,
    SharedModule,
    InputTextModule,
    PasswordModule,
    ToastModule
    ],
  providers: [

  ]
})
export class SecurityModule {
}

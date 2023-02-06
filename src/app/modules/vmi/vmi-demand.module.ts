import {NgModule} from '@angular/core';
import {SharedModule} from '../../@shared/shared-module';
import {VmiFormComponent} from './vmi-form/vmi-form.component';
import {VmiDemandRouting} from './vmi-demand.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [VmiFormComponent],
  imports: [
    SharedModule,
    VmiDemandRouting,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class VmiDemandModule {}

import {NgModule} from '@angular/core';
import {SharedModule} from '../../@shared/shared-module';
import {VmiFormComponent} from './vmi-form/vmi-form.component';
import {VmiDemandRouting} from './vmi-demand.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DividerModule} from 'primeng/divider';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
  declarations: [VmiFormComponent],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    VmiDemandRouting,
    DividerModule,
    CheckboxModule,
    RadioButtonModule

  ],
  providers: []
})
export class VmiDemandModule {}

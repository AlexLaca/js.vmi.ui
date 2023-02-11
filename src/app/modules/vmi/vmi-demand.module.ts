import {NgModule} from '@angular/core';
import {SharedModule} from '../../@shared/shared-module';
import {VmiFormComponent} from './vmi-form/vmi-form.component';
import {VmiDemandRouting} from './vmi-demand.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DividerModule} from 'primeng/divider';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import {CommonModule} from '@angular/common';
import {FamilyMemberFormComponent} from './extended-family/extended-family-form/family-member-form.component';
import {ExtendedFamilyListComponent} from './extended-family/extended-family-list/extended-family-list.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {TableModule} from 'primeng/table';
import { VmiListComponent } from './vmi-list/vmi-list.component';
import { VmiDetailComponent } from './vmi-detail/vmi-detail.component';

@NgModule({
  declarations: [
    VmiFormComponent,
    VmiListComponent,
    FamilyMemberFormComponent,
    ExtendedFamilyListComponent,
    VmiDetailComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    VmiDemandRouting,
    DividerModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule,
    TableModule,
    DynamicDialogModule

  ],
  providers: [],
  entryComponents: [
    FamilyMemberFormComponent
  ]
})
export class VmiDemandModule {
}

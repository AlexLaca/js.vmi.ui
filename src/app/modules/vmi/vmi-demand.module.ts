import {NgModule} from '@angular/core';
import {SharedModule} from '../../@shared/shared-module';
import {VmiFormComponent} from './vmi-form/vmi-form.component';
import {VmiDemandRouting} from './vmi-demand.routing';
import {FamilyMemberFormComponent} from './extended-family/extended-family-form/family-member-form.component';
import {ExtendedFamilyListComponent} from './extended-family/extended-family-list/extended-family-list.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {VmiListComponent} from './vmi-list/vmi-list.component';
import {VmiDetailComponent} from './vmi-detail/vmi-detail.component';
import {StepsModule} from 'primeng/steps';
import {MessageService} from 'primeng/api';
import { StatementsComponent } from './statements/statements.component';
import { AddressesComponent } from './addresses/addresses.component';
import { SummaryComponent } from './summary/summary.component';
import { FirstChapterComponent } from './chapter-1/first-chapter/first-chapter.component';
import { SecondChapterComponent } from './chapter-2/second-chapter/second-chapter.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InitiatorChapterComponent } from './chapter-0/initiator-chapter/initiator-chapter.component';
import {VmiFormService} from './vmi-form/vmi-form.service';

@NgModule({
  declarations: [
    VmiFormComponent,
    VmiListComponent,
    FamilyMemberFormComponent,
    ExtendedFamilyListComponent,
    VmiDetailComponent,
    StatementsComponent,
    AddressesComponent,
    SummaryComponent,
    FirstChapterComponent,
    SecondChapterComponent,
    InitiatorChapterComponent,
  ],
  imports: [
    SharedModule,
    VmiDemandRouting,
    DynamicDialogModule,
    StepsModule,
    BrowserAnimationsModule,
    ScrollPanelModule
  ],
  providers: [
    MessageService,
    VmiFormService
  ],
  exports: [
    ExtendedFamilyListComponent
  ],
  entryComponents: [
    FamilyMemberFormComponent
  ]
})
export class VmiDemandModule {
}

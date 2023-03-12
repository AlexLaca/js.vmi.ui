import {NgModule} from '@angular/core';
import {SharedModule} from '../../@shared/shared-module';
import {VmiFormComponent} from './vmi-form/vmi-form.component';
import {VmiDemandRouting} from './vmi-demand.routing';
import {FamilyMemberFormComponent} from './chapter-3/extended-family/extended-family-form/family-member-form.component';
import {ExtendedFamilyListComponent} from './chapter-3/extended-family/extended-family-list/extended-family-list.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {VmiListComponent} from './vmi-list/vmi-list.component';
import {VmiDetailComponent} from './vmi-detail/vmi-detail.component';
import {StepsModule} from 'primeng/steps';
import {MessageService} from 'primeng/api';
import {StatementsComponent} from './statements/statements.component';
import {FirstChapterComponent} from './chapter-1/first-chapter/first-chapter.component';
import {SecondChapterComponent} from './chapter-2/second-chapter/second-chapter.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InitiatorChapterComponent} from './chapter-0/initiator-chapter/initiator-chapter.component';
import {VmiFormService} from './vmi-form/vmi-form.service';
import {ThirdChapterComponent} from './chapter-3/third-chapter/third-chapter.component';
import {SpeedDialModule} from 'primeng/speeddial';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faChildReaching} from '@fortawesome/free-solid-svg-icons';
import { FourthChapterComponent } from './chapter-4/fourth-chapter/fourth-chapter.component';

@NgModule({
  declarations: [
    VmiFormComponent,
    VmiListComponent,
    FamilyMemberFormComponent,
    ExtendedFamilyListComponent,
    VmiDetailComponent,
    StatementsComponent,
    FirstChapterComponent,
    SecondChapterComponent,
    InitiatorChapterComponent,
    ThirdChapterComponent,
    FourthChapterComponent,
  ],
  imports: [
    SharedModule,
    VmiDemandRouting,
    DynamicDialogModule,
    StepsModule,
    BrowserAnimationsModule,
    ScrollPanelModule,
    SpeedDialModule,
    FontAwesomeModule
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
  constructor(library: FaIconLibrary) {
    library.addIcons(faChildReaching);
  }
}

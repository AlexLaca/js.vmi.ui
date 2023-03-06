import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VmiFormComponent} from './vmi-form/vmi-form.component';
import {VmiListComponent} from './vmi-list/vmi-list.component';
import {VmiDetailComponent} from './vmi-detail/vmi-detail.component';
import {StatementsComponent} from './statements/statements.component';
import {SummaryComponent} from './summary/summary.component';
import {FirstChapterComponent} from './chapter-1/first-chapter/first-chapter.component';
import {SecondChapterComponent} from './chapter-2/second-chapter/second-chapter.component';
import {InitiatorChapterComponent} from './chapter-0/initiator-chapter/initiator-chapter.component';
import {ThirdChapterComponent} from './chapter-3/third-chapter/third-chapter.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'init', component: InitiatorChapterComponent},

      {
        path: 'request',
        component: VmiFormComponent,
        children: [
          {path: 'chapter-1', component: FirstChapterComponent},
          {path: 'chapter-2', component: SecondChapterComponent},
          {path: 'chapter-3', component: ThirdChapterComponent},
          {path: 'statement', component: StatementsComponent},
          {path: 'summary', component: SummaryComponent}
        ]
      },

      {path: 'list', component: VmiListComponent},
      {path: 'list/:serial', component: VmiDetailComponent},
    ],

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VmiDemandRouting {
}

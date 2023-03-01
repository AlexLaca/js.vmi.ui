import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VmiFormComponent} from './vmi-form/vmi-form.component';
import {VmiListComponent} from './vmi-list/vmi-list.component';
import {VmiDetailComponent} from './vmi-detail/vmi-detail.component';
import {PersonSearcherComponent} from '../../@shared/components/person-searcher/person-searcher.component';
import {HouseholdComponent} from './household/household.component';
import {AddressesComponent} from './addresses/addresses.component';
import {StatementsComponent} from './statements/statements.component';
import {SummaryComponent} from './summary/summary.component';
import {FirstChapterComponent} from './chapter-1/first-chapter/first-chapter.component';
import {SecondChapterComponent} from './chapter-2/second-chapter/second-chapter.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'request',
        component: VmiFormComponent,
        children: [
          {path: '', component: PersonSearcherComponent},
          {path: 'chapter-1', component: FirstChapterComponent},
          {path: 'chapter-2', component: SecondChapterComponent},
          {path: 'household', component: HouseholdComponent},
          {path: 'statement', component: StatementsComponent},
          {path: 'summary', component: SummaryComponent}
        ]
      },
      {path: 'list', component: VmiListComponent},
      {path: 'list/:serial', component: VmiDetailComponent},
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VmiDemandRouting {
}

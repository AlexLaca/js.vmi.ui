import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VmiFormComponent} from './vmi-form/vmi-form.component';
import {VmiListComponent} from './vmi-list/vmi-list.component';
import {VmiDetailComponent} from './vmi-detail/vmi-detail.component';
import {PersonSearcherComponent} from '../../@shared/components/person-searcher/person-searcher.component';
import {PersonDetailComponent} from '../../@shared/components/person-detail/person-detail.component';
import {AddressComponent} from '../../@shared/components/address/address.component';
import {HouseholdComponent} from './household/household.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'request',
        component: VmiFormComponent,
        children: [
          {path: '', component: PersonSearcherComponent},
          {path: 'applicant', component: PersonDetailComponent},
          {path: 'address', component: AddressComponent},
          {path: 'household', component: HouseholdComponent}
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

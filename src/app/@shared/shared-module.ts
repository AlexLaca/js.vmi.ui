import {NgModule} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CardModule} from 'primeng/card';
import {PersonSearcherComponent} from './components/person-searcher/person-searcher.component';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TableModule} from 'primeng/table';
import {PersonDetailComponent} from './components/person-detail/person-detail.component';
import {DividerModule} from 'primeng/divider';
import {AddressComponent} from './components/address/address.component';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import {SearchService} from './services/search-service';

@NgModule({
  declarations: [
    AddressComponent,
    PersonSearcherComponent,
    PersonDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DividerModule,
    TableModule,
    CardModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DividerModule,
    TableModule,
    CardModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,

    AddressComponent,
    PersonSearcherComponent,
    PersonDetailComponent,

    ToastModule,
    MessagesModule,
  ],
  providers: [SearchService]
})
export class SharedModule {
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('ro');
  }
}

import {NgModule} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CardModule} from 'primeng/card';

@NgModule({
  exports: [CardModule],
  declarations: []
})
export class SharedModule {
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('ro');
  }
}

import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CoreModuleLoader} from './core-module.loader';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {DataStoreService} from './data-store.service';

@NgModule({
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  providers: [DataStoreService]
})
export class CoreModule extends CoreModuleLoader{
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule)
  }
}

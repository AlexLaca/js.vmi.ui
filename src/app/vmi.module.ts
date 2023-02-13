import {NgModule} from '@angular/core';
import {VmiRoutingModule} from './vmi-routing.module';
import {VmiComponent} from './vmi.component';
import {CoreModule} from "./@core/core.module";
import {VmiNavigatorComponent} from './navigator/vmi-navigator.component';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SharedModule} from './@shared/shared-module';
import {VmiDemandModule} from './modules/vmi/vmi-demand.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    VmiComponent,
    VmiNavigatorComponent,
    LandingPageComponent,
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CoreModule,
    SharedModule,
    VmiRoutingModule,
    VmiDemandModule,
    MenubarModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [VmiComponent]
})
export class VmiModule {
}

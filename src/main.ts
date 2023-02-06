import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { VmiModule } from './app/vmi.module';


platformBrowserDynamic().bootstrapModule(VmiModule)
  .catch(err => console.error(err));

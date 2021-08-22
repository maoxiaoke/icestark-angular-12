import { NgModuleRef } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import isInIcestark from '@ice/stark-app/lib/isInIcestark';
import setLibraryName from '@ice/stark-app/lib/setLibraryName';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Added by icestark ----- start -----
// 定义生命周期

setLibraryName('angular-micro-name');

let app: void | NgModuleRef<AppModule>;

if (!isInIcestark()) {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

export async function mount () {
  app = await platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

export function unmount () {
  // @ts-ignore
  app.destroy();
}

// Added by icestark ----- end -----

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component'
import { APP_BASE_HREF } from '@angular/common';
import getBasename from '@ice/stark-app/lib/getBasename';
import isInIcestark from '@ice/stark-app/lib/isInIcestark';


const routes: Routes = [
  { path: 'first', component: FirstComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // Added by icestark 修改 anglur 应用的 basename
  providers: [{ provide: APP_BASE_HREF, useValue: isInIcestark() ? getBasename() : '/' }]
})
export class AppRoutingModule { }

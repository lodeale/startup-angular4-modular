import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavComponent, appRoute } from './pages/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    NavComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoute),
  ],
  exports: [
    HomeComponent,
    ContactComponent,
    NavComponent,
  ],
  providers: [],
  entryComponents: [
  ]
})
export class MainModule { }

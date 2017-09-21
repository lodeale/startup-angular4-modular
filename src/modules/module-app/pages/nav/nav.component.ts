import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ContactComponent} from '../contact/contact.component';

export const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
];

@Component({
  selector: 'nav-component',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
}

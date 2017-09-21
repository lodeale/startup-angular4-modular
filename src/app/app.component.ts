import { Component } from '@angular/core';
import { HomeComponent } from '../modules/module-app/pages/home/home.component';
import { NavComponent } from '../modules/module-app/pages/nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StartUP App Angular';
}

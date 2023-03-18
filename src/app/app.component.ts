import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSideNav = false;
  constructor(private router: Router) {}
  navigateTo(path: string) {
    this.showSideNav = false;
    this.router.navigate([path])
  }
}

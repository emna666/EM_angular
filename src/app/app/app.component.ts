import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-nav></app-nav>
  <section>
    <router-outlet></router-outlet>
  </section>`
})
export class AppComponent {
  title = 'ng7-pre';
}

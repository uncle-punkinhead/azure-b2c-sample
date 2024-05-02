import { Component } from '@angular/core';

@Component({
  selector: 'b2c-root',
  template: `
    <h1>Welcome to {{title}}!</h1>

    <router-outlet />
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-b2c';
}

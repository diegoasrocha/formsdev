import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `router-outlet{
      margin-top: 10px !important;
    }`
  ]
})
export class AppComponent {
  title = 'Forms';
}

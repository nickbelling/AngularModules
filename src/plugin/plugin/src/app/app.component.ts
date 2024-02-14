import { Component, inject } from '@angular/core';
import { SharedComponent } from '@my-project/shared';

@Component({
  selector: 'app-root',
  imports: [SharedComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'plugin';
}

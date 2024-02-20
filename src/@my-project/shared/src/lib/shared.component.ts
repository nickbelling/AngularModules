import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'lib-shared',
  standalone: true,
  imports: [
  ],
  template: `
    <p>
      Look at that! A shared component!
      Counter: {{service.counter}} (<a href="#" (click)="service.increment()">Click to increment</a>)
    </p>
  `,
  styles: ``
})
export class SharedComponent {
  constructor(
    public service: SharedService
  ) {}
}

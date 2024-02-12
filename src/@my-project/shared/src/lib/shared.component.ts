import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'lib-shared',
  standalone: true,
  imports: [
    MatCardModule
  ],
  template: `
    <mat-card>
      Look at that! A shared component!
    </mat-card>
  `,
  styles: ``
})
export class SharedComponent {
}

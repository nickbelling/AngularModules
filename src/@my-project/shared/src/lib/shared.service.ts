import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public counter: number = 0;

  constructor() {
    console.log('Initializing Shared Service, again!');
  }

  public increment() {
    this.counter++;
  }
}

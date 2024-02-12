import { Component, ComponentFactoryResolver, ElementRef, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { SharedComponent } from '@my-project/shared';
import { MatCardModule } from '@angular/material/card';
import { loadRemoteModule } from '@angular-architects/native-federation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    //SharedComponent,
    MatCardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {'class': 'mat-typography'}
})
export class AppComponent implements OnInit {
  public title: string = 'main';
  @ViewChild('pluginContainer', { read: ViewContainerRef }) pluginContainerRef!: ViewContainerRef;

  constructor(
  ) {
    console.log('hi');
  }

  async ngOnInit() {
    console.log('loading!');
    // const loadedModule = await loadRemoteModule('plugin', './Component');
    // console.log('Loaded module:', loadedModule);
    // if (loadedModule.AppComponent) {
    //   this.pluginContainerRef.clear();
    //   this.pluginContainerRef.createComponent(loadedModule.AppComponent);
    // } else {
    //   console.error('Nope :(');
    // }
  }
}

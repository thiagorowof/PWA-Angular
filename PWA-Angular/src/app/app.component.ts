import { Component } from '@angular/core';
import { routerTransition } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ],
})
export class AppComponent {
  title = 'PWA-Angular';
  
  prepareRoute(outlet) {
    return outlet.activatedRouteData.state;
  }

}


import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import "rxjs/Rx";

declare var ga: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
      constructor(public router: Router) {
          router.events.distinctUntilChanged((previous: any, current: any) => {
              if(current instanceof NavigationEnd) {
                  return previous.url === current.url;
              }
              return true;
          }).subscribe((x: any) => {
              ga('send', 'pageview', x.url);
          });
      }
}

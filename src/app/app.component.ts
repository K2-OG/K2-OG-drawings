/* 2023 - K2
All rights reserved. */

import { Component } from '@angular/core';
// import { NavigationService, routerTransition } from 'src/app/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [routerTransition()],
})
export class AppComponent {
  title = 'cool-shit';
  // constructor(private navigationService: NavigationService) {}

  // getRouteAnimation(outlet: any) {
  //   return this.navigationService.animationValue;
  // }
}

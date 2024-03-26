/* 2023 - K2
All rights reserved. */

import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { RouteNames } from 'src/app/enums';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePageComponent implements OnInit, AfterViewChecked {
  title = 'cool-shit';

  routes: string[] = [];

  ngOnInit(): void {
    const routeNames = RouteNames;
    for (let key in routeNames) {
      this.routes.push(routeNames[key as keyof typeof RouteNames]);
    }
  }

  ngAfterViewChecked(): void {
    const arr = document.getElementsByClassName(
      'link-text'
    ) as HTMLCollectionOf<HTMLElement>;
    var demSpans = Array.from(arr);
    // if (demSpans.length > 0) {
    //   for (let key in demSpans) {
    //     demSpans[key].addEventListener('transitionend', this.changeRotation);
    //   }
    // }
    // this.changeRotation();
  }

  changeRotation(): void {
    const arr = document.getElementsByClassName(
      'link-text'
    ) as HTMLCollectionOf<HTMLElement>;
    var demSpans = Array.from(arr);
    if (demSpans.length > 0) {
      for (let key in demSpans) {
        const min = 20;
        const max = 60;
        const difference = max - min;
        let rand = Math.random();
        rand = Math.floor(rand * difference);
        rand = rand + min;
        rand = -rand;
        demSpans[key].style.setProperty('--rotation', rand + 'deg');
      }
    }
  }
}

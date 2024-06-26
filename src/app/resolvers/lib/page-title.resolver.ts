/* 2023 - K2
All rights reserved. */

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { RouteNames } from 'src/app/enums';

const TITLE = "K2's Lab";

@Injectable({
  providedIn: 'root',
})
export class PageTitleResolver implements Resolve<string> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const page: string = route.url[0]?.path;
    const pageConverted: string = page?.replace(/-/g, '_');
    const pageTitle = page
      ? `${TITLE} - ${RouteNames[
          pageConverted.toUpperCase() as keyof typeof RouteNames
        ]
          .charAt(0)
          .toUpperCase()}${RouteNames[
          pageConverted.toUpperCase() as keyof typeof RouteNames
        ].slice(1)}`
      : TITLE;
    return of(pageTitle.replace(/-/g, ' '));
  }
}

/* 2023 - K2
All rights reserved. */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  BloomPageComponent,
  HomePageComponent,
  SandwichPageComponent,
  SunsetPageComponent,
  VaporPageComponent,
  TesterPageComponent,
  SassierPageComponent,
  GeminiPageComponent,
  GrowPageComponent,
} from './pages';
import { PageTitleResolver } from './resolvers';
import { RouteNames } from './enums';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: PageTitleResolver,
  },
  {
    path: RouteNames.BLOOM,
    component: BloomPageComponent,
    title: PageTitleResolver,
  },
  {
    path: RouteNames.SUNSET,
    component: SunsetPageComponent,
    title: PageTitleResolver,
  },
  {
    path: RouteNames.SANDWICH,
    component: SandwichPageComponent,
    title: PageTitleResolver,
  },
  {
    path: RouteNames.VAPOR,
    component: VaporPageComponent,
    title: PageTitleResolver,
  },
  {
    path: RouteNames.SASSIER,
    component: SassierPageComponent,
    title: PageTitleResolver,
  },
  {
    path: RouteNames.GEMINI,
    component: GeminiPageComponent,
    title: PageTitleResolver,
  },
  {
    path: RouteNames.TESTER,
    component: TesterPageComponent,
    title: PageTitleResolver,
  },
  {
    path: RouteNames.GROW,
    component: GrowPageComponent,
    title: PageTitleResolver,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

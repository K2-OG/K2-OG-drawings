/* 2023 - K2
All rights reserved. */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// pages
import {
  BloomPageComponent,
  HomePageComponent,
  SandwichPageComponent,
  SunsetPageComponent,
  TesterPageComponent,
  VaporPageComponent,
} from './pages';

const pages = [
  HomePageComponent,
  BloomPageComponent,
  SandwichPageComponent,
  SunsetPageComponent,
  VaporPageComponent,
  TesterPageComponent,
];

@NgModule({
  declarations: [AppComponent, ...pages],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

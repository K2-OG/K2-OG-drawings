/* 2023 - K2
All rights reserved. */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// pages
import {
  BloomPageComponent,
  GeminiPageComponent,
  HomePageComponent,
  SandwichPageComponent,
  SassierPageComponent,
  SunsetPageComponent,
  TesterPageComponent,
  VaporPageComponent,
} from './pages';
import { NavigationService } from './common';

const pages = [
  BloomPageComponent,
  GeminiPageComponent,
  HomePageComponent,
  SandwichPageComponent,
  SunsetPageComponent,
  SassierPageComponent,
  TesterPageComponent,
  VaporPageComponent,
];

@NgModule({
  declarations: [AppComponent, ...pages],
  imports: [BrowserModule, AppRoutingModule],
  providers: [NavigationService],
  bootstrap: [AppComponent],
})
export class AppModule {}

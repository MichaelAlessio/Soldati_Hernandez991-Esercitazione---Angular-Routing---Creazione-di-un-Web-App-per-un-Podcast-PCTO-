import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { A3Component } from './a3/a3.component';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    A1Component,
    A2Component,
    A3Component
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

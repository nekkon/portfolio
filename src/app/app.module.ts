import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { App } from './app';

import { Routing } from './app.routes';

import { Globals } from './app.globals';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( Routing )
  ],
  providers: [Globals],
  bootstrap: [App]
})
export class AppModule {}

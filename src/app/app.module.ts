import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ErrorHandler } from '@angular/core';
import * as Raven from 'raven-js';
import { RouterModule } from '@angular/router';

import { App } from './app';

import { Routing } from './app.routes';
import { Shared } from "app/providers/shared";


Raven
  .config('https://4cbb01e3731e4f0bbf13b4ce25b16fba@sentry.io/145646')
  .install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err:any) : void {
    Raven.captureException(err.originalError);
  }
}

@NgModule({
  declarations: [
      App
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot( Routing )
  ],
  providers: [ Shared , { provide: ErrorHandler, useClass: RavenErrorHandler } ],
  bootstrap: [ App ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ErrorHandler } from '@angular/core';
import * as Raven from 'raven-js';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { App } from './app';

import { Routing } from './app.routes';

import { Globals } from './app.globals';
import { scrollTrigger } from './services/scrollTrigger';

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
    FormsModule,
    HttpModule,
    RouterModule.forRoot( Routing ),
    FlexLayoutModule.forRoot(),
  ],
  providers: [ Globals , { provide: ErrorHandler, useClass: RavenErrorHandler } ],
  bootstrap: [ App ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ErrorHandler } from '@angular/core';
import { App } from './app';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Shared } from './providers/shared';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from "@angular/service-worker";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './components/index';
import { AboutModule, ExpertinModule, ContactModule, AccomplishmentsModule, EducationConferencesModule, ExperienceModule, VideoModule, ProjectsModule } from './sections/index';
import { scrollTrigger } from './providers/scrollTrigger';
import { RouterModule } from '@angular/router';
import { Routing } from './app.routes';

/*
import * as Raven from 'raven-js';

Raven
  .config('https://4cbb01e3731e4f0bbf13b4ce25b16fba@sentry.io/145646')
  .install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err:any) : void {
    Raven.captureException(err.originalError);
  }
}*/

@NgModule({
  declarations: [
      App
  ],
  imports: [
      BrowserModule.withServerTransition({appId: 'portfolio'}),
      BrowserAnimationsModule,
      HttpClientModule,
      RouterModule.forRoot( Routing ),
      MenuModule, VideoModule,
      ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [ Shared , scrollTrigger, 
      // { provide: ErrorHandler, useClass: RavenErrorHandler } 
  ],
  bootstrap: [ App ]
})
export class AppModule {}

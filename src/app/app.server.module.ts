import { NgModule } from "@angular/core";
import {
  ServerModule,
  ServerTransferStateModule
} from "@angular/platform-server";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ModuleMapLoaderModule } from "@nguniversal/module-map-ngfactory-loader";
import { FlexLayoutServerModule } from "@angular/flex-layout/server";
import { AppBrowserModule } from "./app.browser.module";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    // The AppServerModule should import your AppBrowserModule followed
    // by the ServerModule from @angular/platform-server.
    AppBrowserModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
    FlexLayoutServerModule,
    NoopAnimationsModule
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent]
})
export class AppServerModule {}

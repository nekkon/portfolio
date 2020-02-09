import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FooterComponent } from "./footer";

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {}

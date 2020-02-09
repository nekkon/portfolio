import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccomplishmentsComponent } from "./accomplishments";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TitleModule } from "../../components/index";
import { SVGModule } from "src/app/components/svg/svg.module";

@NgModule({
  imports: [CommonModule, SVGModule, FlexLayoutModule, TitleModule],
  declarations: [AccomplishmentsComponent],
  exports: [AccomplishmentsComponent]
})
export class AccomplishmentsModule {}

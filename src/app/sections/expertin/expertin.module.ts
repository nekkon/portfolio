import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExpertinComponent } from "./expertin";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MasteryModule, TitleModule } from "../../components/index";
import { SVGModule } from "src/app/components/svg/svg.module";

@NgModule({
  imports: [
    CommonModule,
    SVGModule,
    MasteryModule,
    FlexLayoutModule,
    TitleModule
  ],
  declarations: [ExpertinComponent],
  exports: [ExpertinComponent]
})
export class ExpertinModule {}

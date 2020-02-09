import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListModule, TitleModule } from "../../components/index";
import { FlexLayoutModule } from "@angular/flex-layout";
import { EducationConferencesComponent } from "./education-conferences";
import { SVGModule } from "src/app/components/svg/svg.module";

@NgModule({
  imports: [CommonModule, SVGModule, ListModule, FlexLayoutModule, TitleModule],
  declarations: [EducationConferencesComponent],
  exports: [EducationConferencesComponent]
})
export class EducationConferencesModule {}

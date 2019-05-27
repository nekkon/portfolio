import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ExperienceComponent } from "./experience";
import { TimelineModule, TitleModule } from "../../components/index";

@NgModule({
  imports: [CommonModule, TimelineModule, TitleModule],
  declarations: [ExperienceComponent],
  exports: [ExperienceComponent]
})
export class ExperienceModule {}

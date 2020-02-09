import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SVGLinkedinComponent } from "./linkedin/svg";
import { SVGGithubComponent } from "./github/svg";
import { SVGDivider1Component } from "./divider1/svg";
import { SVGDivider2Component } from "./divider2/svg";
import { SVGDivider3Component } from "./divider3/svg";
import { SVGDivider4Component } from "./divider4/svg";
import { SVGAccomplishmentsComponent } from "./accomplishments/svg";
import { SVGContactComponent } from "./contact/svg";
import { SVGExpertinComponent } from "./expertin/svg";
import { SVGEducationComponent } from "./education/svg";
import { SVGConferencesComponent } from "./conferences/svg";

@NgModule({
  imports: [CommonModule],
  declarations: [
    SVGLinkedinComponent,
    SVGGithubComponent,
    SVGExpertinComponent,
    SVGAccomplishmentsComponent,
    SVGEducationComponent,
    SVGConferencesComponent,
    SVGContactComponent,
    SVGDivider1Component,
    SVGDivider2Component,
    SVGDivider3Component,
    SVGDivider4Component
  ],
  exports: [
    SVGLinkedinComponent,
    SVGGithubComponent,
    SVGExpertinComponent,
    SVGAccomplishmentsComponent,
    SVGEducationComponent,
    SVGConferencesComponent,
    SVGContactComponent,
    SVGDivider1Component,
    SVGDivider2Component,
    SVGDivider3Component,
    SVGDivider4Component
  ]
})
export class SVGModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VideoComponent } from "./video";
import { SVGModule } from "src/app/components/svg/svg.module";

@NgModule({
  imports: [CommonModule, SVGModule],
  declarations: [VideoComponent],
  exports: [VideoComponent]
})
export class VideoModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimelineComponent } from "./timeline";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatIconModule, MatChipsModule],
  declarations: [TimelineComponent],
  exports: [TimelineComponent]
})
export class TimelineModule {}

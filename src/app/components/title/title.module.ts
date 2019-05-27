import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TitleComponent } from "./title";

@NgModule({
  imports: [CommonModule],
  declarations: [TitleComponent],
  exports: [TitleComponent]
})
export class TitleModule {}

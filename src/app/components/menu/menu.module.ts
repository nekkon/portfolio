import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ContactComponent } from "./contact";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxCaptchaModule } from "ngx-captcha";
import { SVGModule } from "src/app/components/svg/svg.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SVGModule,
    MatInputModule,
    MatButtonModule,
    NgxCaptchaModule,
    FlexLayoutModule
  ],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule {}

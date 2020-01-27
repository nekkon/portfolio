import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ContactComponent } from "./contact";
import { MatInputModule, MatButtonModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxCaptchaModule } from "ngx-captcha";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    NgxCaptchaModule,
    FlexLayoutModule
  ],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule {}

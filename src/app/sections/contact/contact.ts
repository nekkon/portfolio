import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Shared } from "../../providers/shared";
import { InvisibleReCaptchaComponent } from "ngx-captcha";

@Component({
  selector: "section-contact",
  templateUrl: "./contact.html",
  styleUrls: ["./contact.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent {
  contactForm: FormGroup;
  siteRecaptchaKey: string = "6LcGPl4UAAAAAHq1F0ZlJA46PRWgvOBmigAoQ1eI";
  recaptcha: any = null;

  sentEmail: boolean;

  @ViewChild("captchaElem", { static: false }) captchaElem: InvisibleReCaptchaComponent;

  constructor(public portfolio: Shared, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      message: ["", Validators.required]
    });
  }

  handleSuccess(event?) {
    if (event) {
      console.log(event);
    }
    if (this.contactForm.valid) {
      const data = {
        name: this.contactForm.controls["name"].value,
        email: this.contactForm.controls["email"].value,
        message: this.contactForm.controls["message"].value
      };
      this.portfolio.http.post("/contact", data).subscribe(res => {
        console.log(res);
        this.sentEmail = true;
        this.captchaElem.resetCaptcha();
      });
    }
  }

  handleExecute(): void {
    this.captchaElem.execute();
  }
}

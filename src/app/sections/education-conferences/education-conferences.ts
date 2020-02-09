import { Component } from "@angular/core";
import { Shared } from "../../providers/shared";

@Component({
  selector: "section-education-conferences",
  templateUrl: "./education-conferences.html",
  styleUrls: ["./education-conferences.scss"]
})
export class EducationConferencesComponent {
  constructor(public portfolio: Shared) {}
}

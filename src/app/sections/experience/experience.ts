import { Component } from "@angular/core";
import { Shared } from "../../providers/shared";

@Component({
  selector: "section-experience",
  templateUrl: "./experience.html",
  styleUrls: ["./experience.scss"]
})
export class ExperienceComponent {
  constructor(public portfolio: Shared) {}
}

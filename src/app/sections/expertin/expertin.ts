import { Component } from "@angular/core";
import { Shared } from "../../providers/shared";

@Component({
  selector: "section-expertin",
  templateUrl: "./expertin.html",
  styleUrls: ["./expertin.scss"]
})
export class ExpertinComponent {
  constructor(public portfolio: Shared) {}
}

import { Component } from "@angular/core";
import { Shared } from "../../providers/shared";

@Component({
  selector: "section-accomplishments",
  templateUrl: "./accomplishments.html",
  styleUrls: ["./accomplishments.scss"]
})
export class AccomplishmentsComponent {
  constructor(public portfolio: Shared) {}
}

import { Component } from "@angular/core";
import { Shared } from "../../providers/shared";

@Component({
  selector: "section-footer",
  templateUrl: "./footer.html",
  styleUrls: ["./footer.scss"]
})
export class FooterComponent {
  constructor(public portfolio: Shared) {}
}

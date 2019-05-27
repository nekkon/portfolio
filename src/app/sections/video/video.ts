import { Component } from "@angular/core";
import { Shared } from "../../providers/shared";

@Component({
  selector: "section-video",
  templateUrl: "./video.html",
  styleUrls: ["./video.scss"]
})
export class VideoComponent {
  constructor(public portfolio: Shared) {}
}

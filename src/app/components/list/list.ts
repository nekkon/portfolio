import { Component, Input } from "@angular/core";

@Component({
  selector: "component-list",
  templateUrl: "./list.html",
  styleUrls: ["./list.scss"]
})
export class ListComponent {
  @Input() item;
  @Input() type;
}

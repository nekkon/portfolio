import { Component, OnInit } from "@angular/core";
import { Shared } from "../../providers/shared";
import { style, animate, transition, trigger } from "@angular/animations";

@Component({
  selector: "component-menu",
  templateUrl: "./menu.html",
  styleUrls: ["./menu.scss"],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(350, style({ opacity: 1 }))
      ]),
      transition(":leave", [
        // :leave is alias to '* => void'
        animate(350, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {
  public visible: boolean = false;
  public atTop: boolean = true;

  constructor(public portfolio: Shared) {}

  ngOnInit() {
    this.portfolio.menu.subscribe(value => {
      this.visible = value;
    });
  }

  toggleMenu() {
    this.portfolio.toggleMenu(!this.visible);
  }

  onScroll(event) {
    const scrollTop = event.srcElement.documentElement.scrollTop;
    if (scrollTop === 0) {
      this.atTop = true;
    } else {
      this.atTop = false;
    }
  }

  scrollTo(elementId) {
    const element = document.querySelector(`#${elementId}`);
    const top = element.getBoundingClientRect().top + window.pageYOffset - 10;

    window.scrollTo({
      top, // scroll so that the element is at the top of the view
      behavior: "smooth" // smooth scroll
    });

    this.visible = false;
  }
}

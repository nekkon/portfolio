import { Injectable, EventEmitter, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class Shared {
  public texts;
  public loading = false;
  public sections = {};
  public menuVisible: boolean = false;

  @Output() menu: EventEmitter<any> = new EventEmitter<any>();

  constructor(public http: HttpClient) {}

  toggleMenu(value?) {
    if (value || value === false) {
      this.menuVisible = value;
    } else {
      this.menuVisible = !this.menuVisible;
    }

    this.menu.emit(this.menuVisible);
  }

  getTexts() {
    return this.http.get(environment.assets + "json/texts_en.min.json");
  }
}

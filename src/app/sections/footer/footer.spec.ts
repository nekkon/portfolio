/* tslint:disable:no-unused-variable */

import { TestBed, async } from "@angular/core/testing";
import { FooterComponent } from "./footer";

describe("AppComponent", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    });
    TestBed.compileComponents();
  });

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(FooterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

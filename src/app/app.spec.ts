/* tslint:disable:no-unused-variable */

import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe("App", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });
    TestBed.compileComponents();
  });

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

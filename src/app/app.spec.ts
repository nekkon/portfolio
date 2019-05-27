/* tslint:disable:no-unused-variable */

import { TestBed, async } from "@angular/core/testing";
import { App } from "./app";

describe("App", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [App]
    });
    TestBed.compileComponents();
  });

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

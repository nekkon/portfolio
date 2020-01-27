/* tslint:disable:no-unused-variable */

import { TestBed, async } from "@angular/core/testing";
import { ContactComponent } from "./contact";
import { ContactModule } from "./contact.module";

describe("AppComponent", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContactModule]
    });
    TestBed.compileComponents();
  });

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(ContactComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

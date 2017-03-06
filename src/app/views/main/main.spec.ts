/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { mainView } from './main';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        mainView
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(mainView);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

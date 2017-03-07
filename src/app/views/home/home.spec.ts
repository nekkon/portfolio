/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { homeView } from './home';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        homeView
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(homeView);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsearchedComponent } from './showsearched.component';

describe('ShowsearchedComponent', () => {
  let component: ShowsearchedComponent;
  let fixture: ComponentFixture<ShowsearchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsearchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

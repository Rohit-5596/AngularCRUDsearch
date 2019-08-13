import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReactiveComponent } from './add-reactive.component';

describe('AddReactiveComponent', () => {
  let component: AddReactiveComponent;
  let fixture: ComponentFixture<AddReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

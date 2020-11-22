import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankBaseComponent } from './dashboard.component';

describe('BlankSimplywhiteComponent', () => {
  let component: BlankBaseComponent;
  let fixture: ComponentFixture<BlankBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlankBaseComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

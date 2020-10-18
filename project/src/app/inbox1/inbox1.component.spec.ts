import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inbox1Component } from './inbox1.component';

describe('Inbox1Component', () => {
  let component: Inbox1Component;
  let fixture: ComponentFixture<Inbox1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inbox1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inbox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

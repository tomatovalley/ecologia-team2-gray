import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstvComponent } from './firstv.component';

describe('FirstvComponent', () => {
  let component: FirstvComponent;
  let fixture: ComponentFixture<FirstvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

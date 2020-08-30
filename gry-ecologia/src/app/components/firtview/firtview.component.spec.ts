import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtviewComponent } from './firtview.component';

describe('FirtviewComponent', () => {
  let component: FirtviewComponent;
  let fixture: ComponentFixture<FirtviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirtviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirtviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

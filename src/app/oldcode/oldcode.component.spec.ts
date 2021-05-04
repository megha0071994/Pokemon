import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldcodeComponent } from './oldcode.component';

describe('OldcodeComponent', () => {
  let component: OldcodeComponent;
  let fixture: ComponentFixture<OldcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IAT1Component } from './iat1.component';

describe('IAT1Component', () => {
  let component: IAT1Component;
  let fixture: ComponentFixture<IAT1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IAT1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IAT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

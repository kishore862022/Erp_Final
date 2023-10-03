import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IAT2Component } from './iat2.component';

describe('IAT2Component', () => {
  let component: IAT2Component;
  let fixture: ComponentFixture<IAT2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IAT2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IAT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

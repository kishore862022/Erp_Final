import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IAT3Component } from './iat3.component';

describe('IAT3Component', () => {
  let component: IAT3Component;
  let fixture: ComponentFixture<IAT3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IAT3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IAT3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

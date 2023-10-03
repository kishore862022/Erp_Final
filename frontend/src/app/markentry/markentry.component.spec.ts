import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkentryComponent } from './markentry.component';

describe('MarkentryComponent', () => {
  let component: MarkentryComponent;
  let fixture: ComponentFixture<MarkentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicgamescoreentryComponent } from './classicgamescoreentry.component';

describe('ClassicgamescoreentryComponent', () => {
  let component: ClassicgamescoreentryComponent;
  let fixture: ComponentFixture<ClassicgamescoreentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicgamescoreentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassicgamescoreentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

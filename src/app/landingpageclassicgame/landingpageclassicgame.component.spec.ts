import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageclassicgameComponent } from './landingpageclassicgame.component';

describe('LandingpageclassicgameComponent', () => {
  let component: LandingpageclassicgameComponent;
  let fixture: ComponentFixture<LandingpageclassicgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingpageclassicgameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingpageclassicgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicgamescoresComponent } from './classicgamescores.component';

describe('ClassicgamescoresComponent', () => {
  let component: ClassicgamescoresComponent;
  let fixture: ComponentFixture<ClassicgamescoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicgamescoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassicgamescoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

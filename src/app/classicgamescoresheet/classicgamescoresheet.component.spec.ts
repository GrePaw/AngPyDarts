import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicgamescoresheetComponent } from './classicgamescoresheet.component';

describe('ClassicgamescoresheetComponent', () => {
  let component: ClassicgamescoresheetComponent;
  let fixture: ComponentFixture<ClassicgamescoresheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicgamescoresheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassicgamescoresheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

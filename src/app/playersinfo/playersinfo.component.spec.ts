import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersinfoComponent } from './playersinfo.component';

describe('PlayersinfoComponent', () => {
  let component: PlayersinfoComponent;
  let fixture: ComponentFixture<PlayersinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

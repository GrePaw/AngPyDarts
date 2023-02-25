import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetremotedataComponent } from './getremotedata.component';

describe('GetremotedataComponent', () => {
  let component: GetremotedataComponent;
  let fixture: ComponentFixture<GetremotedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetremotedataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetremotedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

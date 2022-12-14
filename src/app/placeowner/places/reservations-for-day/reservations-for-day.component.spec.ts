import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsForDayComponent } from './reservations-for-day.component';

describe('ReservationsForDayComponent', () => {
  let component: ReservationsForDayComponent;
  let fixture: ComponentFixture<ReservationsForDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsForDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsForDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

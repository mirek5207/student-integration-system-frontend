import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedReservationComponent } from './requested-reservation.component';

describe('RequestedReservationComponent', () => {
  let component: RequestedReservationComponent;
  let fixture: ComponentFixture<RequestedReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestedReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerLobbyDetailsPlaceReservationComponent } from './owner-lobby-details-place-reservation.component';

describe('OwnerLobbyDetailsPlaceReservationComponent', () => {
  let component: OwnerLobbyDetailsPlaceReservationComponent;
  let fixture: ComponentFixture<OwnerLobbyDetailsPlaceReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerLobbyDetailsPlaceReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerLobbyDetailsPlaceReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

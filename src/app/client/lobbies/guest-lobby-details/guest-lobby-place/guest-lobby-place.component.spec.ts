import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestLobbyPlaceComponent } from './guest-lobby-place.component';

describe('GuestLobbyPlaceComponent', () => {
  let component: GuestLobbyPlaceComponent;
  let fixture: ComponentFixture<GuestLobbyPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestLobbyPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestLobbyPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestLobbyGuestListComponent } from './guest-lobby-guest-list.component';

describe('GuestLobbyGuestListComponent', () => {
  let component: GuestLobbyGuestListComponent;
  let fixture: ComponentFixture<GuestLobbyGuestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestLobbyGuestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestLobbyGuestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

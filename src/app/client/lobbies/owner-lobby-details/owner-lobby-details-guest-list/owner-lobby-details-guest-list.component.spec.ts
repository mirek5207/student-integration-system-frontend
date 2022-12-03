import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerLobbyDetailsGuestListComponent } from './owner-lobby-details-guest-list.component';

describe('OwnerLobbyDetailsGuestListComponent', () => {
  let component: OwnerLobbyDetailsGuestListComponent;
  let fixture: ComponentFixture<OwnerLobbyDetailsGuestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerLobbyDetailsGuestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerLobbyDetailsGuestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

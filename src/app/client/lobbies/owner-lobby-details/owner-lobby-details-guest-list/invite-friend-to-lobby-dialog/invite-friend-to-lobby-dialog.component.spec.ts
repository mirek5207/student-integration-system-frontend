import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteFriendToLobbyDialogComponent } from './invite-friend-to-lobby-dialog.component';

describe('InviteFriendToLobbyDialogComponent', () => {
  let component: InviteFriendToLobbyDialogComponent;
  let fixture: ComponentFixture<InviteFriendToLobbyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteFriendToLobbyDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteFriendToLobbyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

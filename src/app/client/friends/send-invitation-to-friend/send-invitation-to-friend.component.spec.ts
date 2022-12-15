import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendInvitationToFriendComponent } from './send-invitation-to-friend.component';

describe('SendInvitationToFriendComponent', () => {
  let component: SendInvitationToFriendComponent;
  let fixture: ComponentFixture<SendInvitationToFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendInvitationToFriendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendInvitationToFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

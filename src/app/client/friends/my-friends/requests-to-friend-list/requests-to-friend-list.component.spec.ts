import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsToFriendListComponent } from './requests-to-friend-list.component';

describe('RequestsToFriendListComponent', () => {
  let component: RequestsToFriendListComponent;
  let fixture: ComponentFixture<RequestsToFriendListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsToFriendListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestsToFriendListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

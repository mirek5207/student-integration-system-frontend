import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestLobbyDetailsComponent } from './guest-lobby-details.component';

describe('GuestLobbyDetailsComponent', () => {
  let component: GuestLobbyDetailsComponent;
  let fixture: ComponentFixture<GuestLobbyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestLobbyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestLobbyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

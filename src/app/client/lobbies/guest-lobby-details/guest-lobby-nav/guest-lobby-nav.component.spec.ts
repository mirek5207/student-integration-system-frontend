import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestLobbyNavComponent } from './guest-lobby-nav.component';

describe('GuestLobbyNavComponent', () => {
  let component: GuestLobbyNavComponent;
  let fixture: ComponentFixture<GuestLobbyNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestLobbyNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestLobbyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

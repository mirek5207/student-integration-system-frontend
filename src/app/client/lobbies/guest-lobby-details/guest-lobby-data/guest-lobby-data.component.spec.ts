import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestLobbyDataComponent } from './guest-lobby-data.component';

describe('GuestLobbyDataComponent', () => {
  let component: GuestLobbyDataComponent;
  let fixture: ComponentFixture<GuestLobbyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestLobbyDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestLobbyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

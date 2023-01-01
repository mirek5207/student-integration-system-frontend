import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerLobbyDetailsEditLocationMapComponent } from './owner-lobby-details-edit-location-map.component';

describe('OwnerLobbyDetailsEditLocationMapComponent', () => {
  let component: OwnerLobbyDetailsEditLocationMapComponent;
  let fixture: ComponentFixture<OwnerLobbyDetailsEditLocationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerLobbyDetailsEditLocationMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerLobbyDetailsEditLocationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

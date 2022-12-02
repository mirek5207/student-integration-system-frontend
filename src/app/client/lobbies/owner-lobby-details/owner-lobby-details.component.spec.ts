import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerLobbyDetailsComponent } from './owner-lobby-details.component';

describe('OwnerLobbyDetailsComponent', () => {
  let component: OwnerLobbyDetailsComponent;
  let fixture: ComponentFixture<OwnerLobbyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerLobbyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerLobbyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

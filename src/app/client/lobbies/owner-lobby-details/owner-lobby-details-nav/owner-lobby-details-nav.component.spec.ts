import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerLobbyDetailsNavComponent } from './owner-lobby-details-nav.component';

describe('OwnerLobbyDetailsNavComponent', () => {
  let component: OwnerLobbyDetailsNavComponent;
  let fixture: ComponentFixture<OwnerLobbyDetailsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerLobbyDetailsNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerLobbyDetailsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

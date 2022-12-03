import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerLobbyDetailsDataComponent } from './owner-lobby-details-data.component';

describe('OwnerLobbyDetailsDataComponent', () => {
  let component: OwnerLobbyDetailsDataComponent;
  let fixture: ComponentFixture<OwnerLobbyDetailsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerLobbyDetailsDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerLobbyDetailsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

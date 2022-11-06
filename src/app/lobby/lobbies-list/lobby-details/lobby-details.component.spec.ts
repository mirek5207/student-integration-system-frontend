import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyDetailsComponent } from './lobby-details.component';

describe('LobbyDetailsComponent', () => {
  let component: LobbyDetailsComponent;
  let fixture: ComponentFixture<LobbyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LobbyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

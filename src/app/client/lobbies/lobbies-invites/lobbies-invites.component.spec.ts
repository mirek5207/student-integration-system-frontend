import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbiesInvitesComponent } from './lobbies-invites.component';

describe('LobbiesInvitesComponent', () => {
  let component: LobbiesInvitesComponent;
  let fixture: ComponentFixture<LobbiesInvitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbiesInvitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LobbiesInvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

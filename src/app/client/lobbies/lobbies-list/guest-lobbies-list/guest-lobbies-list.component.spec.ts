import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestLobbiesListComponent } from './guest-lobbies-list.component';

describe('GuestLobbiesListComponent', () => {
  let component: GuestLobbiesListComponent;
  let fixture: ComponentFixture<GuestLobbiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestLobbiesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestLobbiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

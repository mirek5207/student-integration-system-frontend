import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHomePublicLobbiesListComponent } from './client-home-public-lobbies-list.component';

describe('ClientHomePublicLobbiesListComponent', () => {
  let component: ClientHomePublicLobbiesListComponent;
  let fixture: ComponentFixture<ClientHomePublicLobbiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientHomePublicLobbiesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientHomePublicLobbiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

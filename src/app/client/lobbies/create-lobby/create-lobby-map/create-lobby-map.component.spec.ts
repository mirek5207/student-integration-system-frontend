import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLobbyMapComponent } from './create-lobby-map.component';

describe('CreateLobbyMapComponent', () => {
  let component: CreateLobbyMapComponent;
  let fixture: ComponentFixture<CreateLobbyMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLobbyMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLobbyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

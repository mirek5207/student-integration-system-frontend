import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHomeMapComponent } from './client-home-map.component';

describe('ClientHomeMapComponent', () => {
  let component: ClientHomeMapComponent;
  let fixture: ComponentFixture<ClientHomeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientHomeMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientHomeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceownerComponent } from './placeowner.component';

describe('PlaceownerComponent', () => {
  let component: PlaceownerComponent;
  let fixture: ComponentFixture<PlaceownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceownerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

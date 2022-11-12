import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPlaceownerComponent } from './register-placeowner.component';

describe('RegisterPlaceownerComponent', () => {
  let component: RegisterPlaceownerComponent;
  let fixture: ComponentFixture<RegisterPlaceownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPlaceownerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPlaceownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

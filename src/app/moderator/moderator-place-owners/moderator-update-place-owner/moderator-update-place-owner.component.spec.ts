import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorUpdatePlaceOwnerComponent } from './moderator-update-place-owner.component';

describe('ModeratorUpdatePlaceOwnerComponent', () => {
  let component: ModeratorUpdatePlaceOwnerComponent;
  let fixture: ComponentFixture<ModeratorUpdatePlaceOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorUpdatePlaceOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeratorUpdatePlaceOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

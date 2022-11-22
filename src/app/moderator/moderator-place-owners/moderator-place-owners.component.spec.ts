import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorPlaceOwnersComponent } from './moderator-place-owners.component';

describe('ModeratorPlaceOwnersComponent', () => {
  let component: ModeratorPlaceOwnersComponent;
  let fixture: ComponentFixture<ModeratorPlaceOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorPlaceOwnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeratorPlaceOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorPlaceOwnersListComponent } from './moderator-place-owners-list.component';

describe('ModeratorPlaceOwnersListComponent', () => {
  let component: ModeratorPlaceOwnersListComponent;
  let fixture: ComponentFixture<ModeratorPlaceOwnersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorPlaceOwnersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeratorPlaceOwnersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

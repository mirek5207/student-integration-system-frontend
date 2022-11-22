import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorUpdateUserComponent } from './moderator-update-user.component';

describe('ModeratorUpdateUserComponent', () => {
  let component: ModeratorUpdateUserComponent;
  let fixture: ComponentFixture<ModeratorUpdateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorUpdateUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeratorUpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateModeratorComponent } from './admin-create-moderator.component';

describe('AdminCreateModeratorComponent', () => {
  let component: AdminCreateModeratorComponent;
  let fixture: ComponentFixture<AdminCreateModeratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateModeratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

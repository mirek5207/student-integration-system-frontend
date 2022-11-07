import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetModeratorComponent } from './admin-get-moderator.component';

describe('AdminGetModeratorComponent', () => {
  let component: AdminGetModeratorComponent;
  let fixture: ComponentFixture<AdminGetModeratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetModeratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGetModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

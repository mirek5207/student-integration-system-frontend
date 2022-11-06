import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetModeratorsComponent } from './admin-get-moderators.component';

describe('AdminGetModeratorsComponent', () => {
  let component: AdminGetModeratorsComponent;
  let fixture: ComponentFixture<AdminGetModeratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetModeratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGetModeratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

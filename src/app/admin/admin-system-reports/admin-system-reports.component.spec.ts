import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSystemReportsComponent } from './admin-system-reports.component';

describe('AdminSystemReportsComponent', () => {
  let component: AdminSystemReportsComponent;
  let fixture: ComponentFixture<AdminSystemReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSystemReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSystemReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateSystemReportComponent } from './admin-update-system-report.component';

describe('AdminUpdateSystemReportComponent', () => {
  let component: AdminUpdateSystemReportComponent;
  let fixture: ComponentFixture<AdminUpdateSystemReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateSystemReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdateSystemReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

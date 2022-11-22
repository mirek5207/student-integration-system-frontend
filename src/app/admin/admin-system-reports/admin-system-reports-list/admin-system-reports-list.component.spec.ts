import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSystemReportsListComponent } from './admin-system-reports-list.component';

describe('AdminSystemReportsListComponent', () => {
  let component: AdminSystemReportsListComponent;
  let fixture: ComponentFixture<AdminSystemReportsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSystemReportsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSystemReportsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

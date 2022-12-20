import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorUpdateUserReportComponent } from './moderator-update-user-report.component';

describe('ModeratorUpdateUserReportComponent', () => {
  let component: ModeratorUpdateUserReportComponent;
  let fixture: ComponentFixture<ModeratorUpdateUserReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorUpdateUserReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeratorUpdateUserReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

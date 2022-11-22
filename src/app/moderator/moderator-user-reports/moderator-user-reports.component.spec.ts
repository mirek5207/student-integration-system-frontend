import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorUserReportsComponent } from './moderator-user-reports.component';

describe('ModeratorUserReportsComponent', () => {
  let component: ModeratorUserReportsComponent;
  let fixture: ComponentFixture<ModeratorUserReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorUserReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeratorUserReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

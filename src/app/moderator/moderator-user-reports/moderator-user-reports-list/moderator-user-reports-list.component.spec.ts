import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorUserReportsListComponent } from './moderator-user-reports-list.component';

describe('ModeratorUserReportsListComponent', () => {
  let component: ModeratorUserReportsListComponent;
  let fixture: ComponentFixture<ModeratorUserReportsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorUserReportsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeratorUserReportsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

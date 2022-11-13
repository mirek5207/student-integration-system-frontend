import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorReportsComponent } from './moderator-reports.component';

describe('ModeratorReportsComponent', () => {
  let component: ModeratorReportsComponent;
  let fixture: ComponentFixture<ModeratorReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeratorReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

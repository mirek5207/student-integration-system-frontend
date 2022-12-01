import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerLobbiesListComponent } from './owner-lobbies-list.component';

describe('OwnerLobbiesListComponent', () => {
  let component: OwnerLobbiesListComponent;
  let fixture: ComponentFixture<OwnerLobbiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerLobbiesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerLobbiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

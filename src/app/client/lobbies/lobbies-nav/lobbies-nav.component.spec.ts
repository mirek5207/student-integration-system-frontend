import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbiesNavComponent } from './lobbies-nav.component';

describe('LobbiesNavComponent', () => {
  let component: LobbiesNavComponent;
  let fixture: ComponentFixture<LobbiesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbiesNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LobbiesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

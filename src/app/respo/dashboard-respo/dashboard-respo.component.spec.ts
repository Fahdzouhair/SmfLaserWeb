import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRespoComponent } from './dashboard-respo.component';

describe('DashboardRespoComponent', () => {
  let component: DashboardRespoComponent;
  let fixture: ComponentFixture<DashboardRespoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRespoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardRespoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

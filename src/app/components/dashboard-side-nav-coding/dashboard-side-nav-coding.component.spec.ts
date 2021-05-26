import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSideNavCodingComponent } from './dashboard-side-nav-coding.component';

describe('DashboardSideNavCodingComponent', () => {
  let component: DashboardSideNavCodingComponent;
  let fixture: ComponentFixture<DashboardSideNavCodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSideNavCodingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSideNavCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

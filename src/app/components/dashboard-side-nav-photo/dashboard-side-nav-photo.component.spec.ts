import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSideNavPhotoComponent } from './dashboard-side-nav-photo.component';

describe('DashboardSideNavPhotoComponent', () => {
  let component: DashboardSideNavPhotoComponent;
  let fixture: ComponentFixture<DashboardSideNavPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSideNavPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSideNavPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

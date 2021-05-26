import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSideNavKnowledgeComponent } from './dashboard-side-nav-knowledge.component';

describe('DashboardSideNavKnowledgeComponent', () => {
  let component: DashboardSideNavKnowledgeComponent;
  let fixture: ComponentFixture<DashboardSideNavKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSideNavKnowledgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSideNavKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

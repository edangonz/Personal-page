import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-side-nav-knowledge',
  templateUrl: './dashboard-side-nav-knowledge.component.html',
  styleUrls: ['./dashboard-side-nav-knowledge.component.scss']
})
export class DashboardSideNavKnowledgeComponent implements OnInit {
  @Input() knowledge : any;

  constructor() { }

  ngOnInit(): void {
  }

}

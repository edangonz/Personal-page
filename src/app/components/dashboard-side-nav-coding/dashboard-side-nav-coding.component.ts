import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-side-nav-coding',
  templateUrl: './dashboard-side-nav-coding.component.html',
  styleUrls: ['./dashboard-side-nav-coding.component.scss']
})
export class DashboardSideNavCodingComponent implements OnInit {
  @Input() coding : any;

  constructor() { }

  ngOnInit(): void {
  }

}

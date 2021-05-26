import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-side-nav-photo',
  templateUrl: './dashboard-side-nav-photo.component.html',
  styleUrls: ['./dashboard-side-nav-photo.component.scss']
})
export class DashboardSideNavPhotoComponent implements OnInit {
  @Input() profile : any;

  constructor() { }

  ngOnInit(): void {
  }

}

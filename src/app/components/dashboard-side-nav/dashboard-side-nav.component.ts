import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-side-nav',
  templateUrl: './dashboard-side-nav.component.html',
  styleUrls: ['./dashboard-side-nav.component.scss']
})
export class DashboardSideNavComponent implements OnInit {
  public data : any;

  constructor(
    private http : HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get('./assets/our_data.json').toPromise()
      .then( (data) => (this.data = data))
      .catch(() => {

    });
  }

}

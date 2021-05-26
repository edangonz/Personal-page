import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContactComponent } from './components/dashboard-contact/dashboard-contact.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { DashboardPortfolioComponent } from './components/dashboard-portfolio/dashboard-portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent
  },
  {
    path: 'portfolio',
    component: DashboardPortfolioComponent
  },
  {
    path: 'contact',
    component: DashboardContactComponent
  },
  { 
    path: '**',
    redirectTo: '' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

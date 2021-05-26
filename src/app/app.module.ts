import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { DashboardPortfolioComponent } from './components/dashboard-portfolio/dashboard-portfolio.component';
import { DashboardContactComponent } from './components/dashboard-contact/dashboard-contact.component';
import { DashboardSideNavComponent } from './components/dashboard-side-nav/dashboard-side-nav.component';
import { DashboardSideNavPhotoComponent } from './components/dashboard-side-nav-photo/dashboard-side-nav-photo.component';
import { DashboardSideNavCodingComponent } from './components/dashboard-side-nav-coding/dashboard-side-nav-coding.component';
import { DashboardSideNavKnowledgeComponent } from './components/dashboard-side-nav-knowledge/dashboard-side-nav-knowledge.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardHomeComponent,
    DashboardPortfolioComponent,
    DashboardContactComponent,
    DashboardSideNavComponent,
    DashboardSideNavPhotoComponent,
    DashboardSideNavCodingComponent,
    DashboardSideNavKnowledgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

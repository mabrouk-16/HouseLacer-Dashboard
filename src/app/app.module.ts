import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { Page404Component } from './Components/page-404/page-404.component';
import { HomeComponent } from './Components/home/home.component';
import { SideBarComponent } from './Components/sideBar/sideBar.component';
import { UsersComponent } from './Components/users/users.component';
import { DesignersComponent } from './Components/designers/designers.component';
import { OffersComponent } from './Components/offers/offers.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SideBarComponent,
    UsersComponent,
    DesignersComponent,
    OffersComponent,
    ProjectsComponent,
    FeedbackComponent,
    Page404Component,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes),HttpClientModule,FormsModule],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}

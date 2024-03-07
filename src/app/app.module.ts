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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { LoaderComponent } from './Components/loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderInterceptor } from './services/Interceptors/loader.interceptor';
import { AuthInterceptor } from './services/Interceptors/auth.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { AdminsComponent } from './Components/admins/admins.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SideBarComponent,
    UsersComponent,
    DesignersComponent,
    AdminsComponent,
    OffersComponent,
    ProjectsComponent,
    FeedbackComponent,
    Page404Component,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
})
export class AppModule {}

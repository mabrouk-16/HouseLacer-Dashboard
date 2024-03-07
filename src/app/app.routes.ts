import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Page404Component } from './Components/page-404/page-404.component';
import { HomeComponent } from './Components/home/home.component';
import { SideBarComponent } from './Components/sideBar/sideBar.component';
import { UsersComponent } from './Components/users/users.component';
import { DesignersComponent } from './Components/designers/designers.component';
import { OffersComponent } from './Components/offers/offers.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { LoginComponent } from './Components/login/login.component';
import { authGuard } from './services/Gaurds/Auth.guard';
import { AdminsComponent } from './Components/admins/admins.component';

export const routes: Routes = [
  {
    path: '',
    component: SideBarComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      // { path: 'designers', component: DesignersComponent },
      { path: 'admin', component: AdminsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'offers/:id', component: OffersComponent },
      { path: 'offers/', component: OffersComponent },
      { path: 'feedback', component: FeedbackComponent },
    ],
    canActivate: [authGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '404', component: Page404Component },

  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

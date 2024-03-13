import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../interface/user';
import { AuthResult } from '../interface/apiResult';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ApiService } from './Api.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  UserSubject: BehaviorSubject<IUser | null>;
  AuthSubject: BehaviorSubject<AuthResult<IUser> | null>;
  constructor(
    private router: Router,
    private apiServ: ApiService
  ) {
    this.UserSubject = new BehaviorSubject<IUser | null>(this.getUser());
    this.AuthSubject = new BehaviorSubject<AuthResult<IUser> | null>(
      this.getFromStorage()
    );
  }
  getFromStorage(): null | AuthResult<IUser> {
    let authData = localStorage.getItem('auth');
    if (authData == null || authData == '') {
      return null;
    } else return JSON.parse(authData);
  }
  setToStorage(data: AuthResult<IUser>) {
    localStorage.setItem('auth', JSON.stringify(data));
    // localStorage.setItem('token', JSON.stringify(data.accessToken));
    this.AuthSubject.next(data);
  }
  getUser(): IUser | null {
    let authUser = localStorage.getItem('user');
    if (authUser == null || authUser == '') {
      return null;
    } else return JSON.parse(authUser);
  }
  // ------------------------------- Login & Logout --------------------------

  newLogin(data: IUser) {
    localStorage.setItem('user', JSON.stringify(data));
    this.UserSubject.next(data);
  }
  userLogout() {
    // this.cookie.delete('accessToken');
    // this.cookie.delete('refreshToken');
    this.apiServ.signOut(null).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
    localStorage.removeItem('user');
    localStorage.removeItem('auth');
    this.AuthSubject.next(null);
    this.UserSubject.next(null);
    this.router.navigateByUrl('login');
  }
}

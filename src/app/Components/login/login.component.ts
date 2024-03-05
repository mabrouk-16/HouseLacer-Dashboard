import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/Api.service';
import { IUser } from '../../interface/user';
import { AuthResult } from '../../interface/apiResult';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user?: IUser;
  authData?: AuthResult<IUser>;
  admin = {
    email: '',
    password: '',
  };
  constructor(
    private cookie: CookieService,
    private ApiServ: ApiService,
    private authServ: AuthService,
    private router: Router
  ) {
    console.log(this.admin);
  }
  login() {
    this.ApiServ.signIn(this.admin).subscribe({
      next: (res) => {
        if (res.success) {
          if (res.user.role == 'Admin') {
            this.user = res.user;
            // console.log(res);
            this.authData = res;
            this.cookie.set('accessToken', res.accessToken);
            this.cookie.set('refreshToken', res.refreshToken);
            this.authServ.setToStorage(this.authData);
            this.authServ.newLogin(res.user);
            this.router.navigate(['home']);
          } else alert('you are not an Admin');
        } else alert(res.message);
      },
    });
  }
}

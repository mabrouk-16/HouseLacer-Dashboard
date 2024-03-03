import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/Api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  admin = {
    email: '',
    password: '',
  };
  constructor(private ApiServ: ApiService) {
    console.log(this.admin);
  }
  login() {
    this.ApiServ.signIn(this.admin).subscribe({
      next: (res) => {
        if (res.success) {
          console.log(res);
          // let data = {
          //   email:res.data
          // }
        } else alert(res.message);
      },
    });
  }
}

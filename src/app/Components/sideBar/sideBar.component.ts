import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interface/user';

@Component({
  selector: 'app-sideBar',
  templateUrl: './sideBar.component.html',
  styleUrls: ['./sideBar.component.css'],
})
export class SideBarComponent {
  user: IUser | null;
  imageUrl?: String;
  constructor(private authServ: AuthService) {
    this.user = this.authServ.getUser();
    this.imageUrl = `https://iti-final-be.onrender.com/${this.user?.image}`;
  }
  logout() {
    // alert('loging Out');
    this.authServ.userLogout();
  }
}

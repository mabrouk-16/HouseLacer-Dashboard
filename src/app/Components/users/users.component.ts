import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interface/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: IUser[] = [];
  user: IUser|undefined ;
  constructor() {}
}

import { Injectable } from '@angular/core';
import { IUser } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: IUser[] = [];

  constructor() {
    this.users = [
      {
        firstName: 'String',
        lastName: 'String',
        userName: 'String',
        email: 'String',
        password: 'String',
        phone: 'String',
        address: 'String',
        city: 'String',
        role: 'String',
        //   enum: ["User", "Admin", "Designer"],
        status: 'String',
        //   enum: ["offline", "blocked", "online"],
        confirmEmail: false,
        urlToUpdate: 'String',
        image: 'String',
        gender: 'String',
        //   enum: ["male", "female"],
        DOB: 'String',
        forgetCode: 'String',
        changePasswordTime: new Date(),
        //   timestamps: true;]
      },
    ];
  }
}

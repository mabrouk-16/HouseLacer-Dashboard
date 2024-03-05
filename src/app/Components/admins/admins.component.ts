import { Component } from '@angular/core';
import { IUser } from '../../interface/user';
import { ApiService } from '../../services/Api.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.css',
})
export class AdminsComponent {
  users: IUser[] = [
    {
      _id: '65cddc2bb3a2a89a62c70cc0',
      firstName: 'Mohamed',
      lastName: 'Masoud',
      userName: 'mahmoud',
      email: 'masoudmedo828@gmail.com',
      password: '$2a$08$uaiWHEPxpob5mCPtMmwxuunTPttISieIxrzTbNDccmuHs0n/4oSNK',
      phone: '+201090297514',
      address: 'El-Seady street,mnouf,egypt',
      city: 'cairo',
      role: 'User',
      status: 'online',
      confirmEmail: true,
      gender: 'male',
      createdAt: '2024-02-15T09:40:59.684Z',
      updatedAt: '2024-03-05T12:10:24.615Z',
      image:
        'uploads/user/profileImage/1709555616207-A5PTmXnWzvtYfUeQ7XkjW783318370AMD-Ryzen-Zen-CPUs_Next-Gen-1480x811-16dfcd71dba8400788ba1b21db832212.jpg',
      urlToUpdate:
        'uploads/user/profileImage/1709555616207-A5PTmXnWzvtYfUeQ7XkjW783318370AMD-Ryzen-Zen-CPUs_Next-Gen-1480x811-16dfcd71dba8400788ba1b21db832212.jpg',
    },
    {
      _id: '65ce26ef59e25171d38b37ab',
      firstName: 'Mohamed',
      lastName: 'Masoud',
      userName: 'mabrouk',
      email: 'masoudmohamed828@gmail.com',
      password: '$2a$08$eh2eXR1r3nvcrZY0.lbYA.QPr0W/sNas1mOvVX6Nf4D4WHzx/yHGq',
      phone: '+201090297514',
      address: 'El-Seady street,mnouf,egypt',
      city: 'cairo',
      role: 'Designer',
      status: 'online',
      confirmEmail: true,
      gender: 'male',
      createdAt: '2024-02-15T14:59:59.131Z',
      updatedAt: '2024-03-04T16:33:00.713Z',

      image:
        'https://iti-final-be.onrender.com/uploads/user/profileImage/1709230574869-TwGZ2zSgyFvs3b3TBLX9r572538426logoitidark.png',
      urlToUpdate:
        'uploads/user/profileImage/1709230574869-TwGZ2zSgyFvs3b3TBLX9r572538426logoitidark.png',
    },
    {
      _id: '65e0752cdfdb880d3a84216b',
      firstName: 'Mohamed',
      lastName: 'Masoud',
      userName: 'MohamedMasoud',
      email: 'mahmoud123@gmail.com',
      password: '$2a$08$0/XGbRTwobiMMSv/HCWlfO/1nFLs6zx2d5M/ditOH3v.QnGx/xOMa',
      role: 'Admin',
      status: 'online',
      confirmEmail: true,
      gender: 'male',
      createdAt: '2024-02-29T12:14:36.301Z',
      updatedAt: '2024-03-03T15:00:00.391Z',
      image: 'https://iti-final-be.onrender.com/undefined',
    },
  ];
  user: IUser | undefined;
  userId: String = '';
  constructor(private apiServ: ApiService) {
    this.users = this.users.filter((admin) => admin.role == 'Admin');
    this.apiServ.getUsers().subscribe({
      next: (res) => {
        alert(res);
        console.log(res);
        this.users = res.data.filter((admin) => admin.role == 'Admin');
      },
    });
  }
  showUser(user: IUser) {
    this.user = user;
    this.userId = user._id;
  }
  deleteItem(userId: String) {
    alert(userId + ' => deleted');
  }
  searchUsers(searchUser?: String) {
    this.user = this.users.find(
      (user) => user._id == searchUser || user.userName == searchUser
    );
    console.log(this.user);
  }
}

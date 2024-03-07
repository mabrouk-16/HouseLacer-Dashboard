import { Component } from '@angular/core';
import { IUser } from '../../interface/user';
import { ApiService } from '../../services/Api.service';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.css',
})
export class AdminsComponent {
  users: IUser[] = [];
  user: IUser | undefined;
  newUser!: IUser;
  regForm!: FormGroup;
  userId: String = '';
  passData = {
    oldPassword: '',
    newPassword: '',
    cPassword: '',
  };
  btnDisabled = true;

  constructor(
    public apiServ: ApiService,
    private router: Router,
  ) {
    this.apiServ.getUsers().subscribe({
      next: (res) => {
        console.log(res);
        this.users = res.data.filter((admin) => admin.role == 'Admin');
        console.log(this.users);
      },
    });
    // form reg
    this.regForm = new FormGroup(
      {
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z]{3,15}$/),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z]{3,15}$/),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/
          ),
        ]),
        cPassword: new FormControl('', [Validators.required]),
        phone: new FormControl('', [
          Validators.required,
          Validators.minLength(9),
        ]),
        gender: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        role: new FormControl('Admin'),
      },
      this.passwordMatch('password', 'cPassword')
    );
  }
  showUser(user: IUser) {
    this.user = user;
    this.userId = user._id;
  }
  deleteItem(userId: String) {
    this.apiServ.deleteUser(userId).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
  searchUsers(searchUser?: string | undefined) {
    this.user = this.users.find(
      (user) => user._id == searchUser || user.userName.includes(searchUser!)
    );
    console.log(this.user);
  }
  changePass(userId: String) {
    this.apiServ.changeUserPass(this.passData).subscribe({
      next: (res) => {
        if (res.success) {
          alert(res.message);
          this.router.navigateByUrl('login');
          localStorage.clear();
        } else alert(res.msgError);
      },
      error: (err) => {
        alert(err);
      },
    });
  }
  matchPass() {
    console.log(this.passData);
    if (
      this.passData.oldPassword !== '' &&
      this.passData.newPassword === this.passData.cPassword &&
      this.passData.newPassword !== ''
    ) {
      this.btnDisabled = false;
    } else this.btnDisabled = true;
    console.log(this.btnDisabled);
  }
  addUser() {
    console.log(this.regForm.value);
    this.apiServ.addUser(this.regForm.value).subscribe({
      next: (res) => {
        console.log(res);
        alert(res.message);
        location.reload()
      },error:(err)=>{
        alert(err)
      }
    });
  } 
  // ================================= password confirmation ============
   passwordMatch(password: string, confirmPassword: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirmPassword);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else {
        confirmPasswordControl.setErrors(null);
        return null;
      }
    };
  }
}





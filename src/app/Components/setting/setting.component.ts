import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interface/user';
import { ApiService } from '../../services/Api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css',
})
export class SettingComponent {
  user: IUser | null;

  imgInp?: ImageSnippet;
  regForm!: FormGroup;
  constructor(private authServ: AuthService, private apiServ: ApiService) {
    this.user = this.authServ.getUser();
    // ============================================== Form ================
    // form reg
    this.regForm = new FormGroup({
      firstName: new FormControl(this.user?.firstName, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern(/^[A-Za-z]{3,15}$/),
      ]),
      lastName: new FormControl(this.user?.lastName, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern(/^[A-Za-z]{3,15}$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/),
      ]),
      gender: new FormControl(this.user?.gender, [Validators.required]),
      role: new FormControl(this.user?.role, [Validators.required]),
    });
  }
  updateUser() {
    console.log(this.regForm.value);
    this.apiServ.updateUser(this.user?._id, this.regForm.value).subscribe({
      next: (res) => {
        console.log(res);
        if(res.success) this.authServ.userLogout()
      },
      error: (err) => {
        console.log(err);
        alert((err))
      },
    });
  }
  updateImg(image: any) {
    const file: File = image.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.imgInp = new ImageSnippet(event.target.value, file);
      this.apiServ.changeImg(this.imgInp.file).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
    reader.readAsDataURL(file);
  }
}

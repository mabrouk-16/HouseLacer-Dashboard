import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResult, AuthResult } from '../interface/apiResult';
import { IProject } from '../interface/project';
import { IOffer } from '../interface/offer';
import { IUser } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  originalUrl = 'https://iti-final-be.onrender.com/';
  projectUrl = 'https://iti-final-be.onrender.com/project/';
  offerUrl = 'https://iti-final-be.onrender.com/offer/';
  userUrl = 'https://iti-final-be.onrender.com/user/';
  constructor(private Http: HttpClient) {}
  // ====================== Admin Signin ====================================
  signIn(user: {}) {
    return this.Http.post<AuthResult<IUser>>(
      this.originalUrl + 'auth/login',
      user
    );
  }
  signOut(user: null) {
    return this.Http.post<AuthResult<IUser>>(
      this.originalUrl + 'auth/logout',
      user
    );
  }
  // ====================== users ====================================
  getUsers() {
    return this.Http.get<ApiResult<IUser[]>>(this.userUrl);
  }
  changeUserPass(passData: {}) {
    return this.Http.patch<ApiResult<IUser[]>>(
      this.userUrl + 'changePassword',
      passData
    );
  }
  addUser(data: IUser) {
    return this.Http.post<ApiResult<IUser>>(this.userUrl + 'addUser', data);
  }
  deleteUser(id: String) {
    return this.Http.delete<ApiResult<any>>(this.userUrl + 'deleteUser/' + id);
  }
  // ====================== Project ====================================
  getProjects() {
    return this.Http.get<ApiResult<IProject[]>>(this.projectUrl);
  }
  deleteProject(id: String) {
    return this.Http.delete<ApiResult<any>>(
      this.projectUrl + 'deleteProject/' + id
    );
  }

  // ====================== Offer ====================================
  getOfferbyProjectId(id: String) {
    return this.Http.get<ApiResult<IOffer[]>>(this.offerUrl + id);
  }
  deleteOffer(id: String) {
    return this.Http.delete<ApiResult<any>>(
      this.offerUrl + 'deleteOffer/' + id
    );
  }
}

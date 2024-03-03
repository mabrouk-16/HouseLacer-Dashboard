import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResult } from '../interface/apiResult';
import { IProject } from '../interface/project';
import { IOffer } from '../interface/offer';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  originalUrl = 'https://iti-final-be.onrender.com/';
  projectUrl = 'https://iti-final-be.onrender.com/project/';
  offerUrl = 'https://iti-final-be.onrender.com/offer/';
  constructor(private Http: HttpClient) {}
  // ====================== Project ====================================
  signIn(user:{}){
    return this.Http.post<ApiResult<any>>(
      this.originalUrl + 'auth/login',
      user
    );
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
}

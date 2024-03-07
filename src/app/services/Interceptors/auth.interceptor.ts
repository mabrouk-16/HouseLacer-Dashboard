import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../Api.service';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private apiServ: ApiService, private authServ: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = req.headers.set(
      'Authorization',
      `FINALITI__${this.authServ.getFromStorage()?.access_token}`
    );
    const authReq = req.clone({ headers });
    console.log(authReq);
    // alert(authReq.headers)
    return next.handle(authReq);
  }
}

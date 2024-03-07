import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderService } from '../loader.service';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loadServ: LoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadServ.show();
    return next.handle(req).pipe(finalize(() => this.loadServ.hide()));
  }
}

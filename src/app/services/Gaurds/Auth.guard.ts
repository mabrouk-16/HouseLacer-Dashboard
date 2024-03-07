import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({ providedIn: 'root' })
export class authGuard implements CanActivate {
  constructor(private authServ: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authServ.getFromStorage() == null) {
      this.router.navigate(['/login']);
      return false;
    } else return true;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      console.log('AuthGuard: No token found, redirecting to login');
      return this.router.createUrlTree(['/login']);
    }
  }
}
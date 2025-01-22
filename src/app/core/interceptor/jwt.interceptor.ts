import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';
import { GeneralFunctionService } from '@core/service/general-function.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  token:any;
  constructor(
    private router: Router,
    private allFunction: GeneralFunctionService,
    private auth: AuthService
  ) {
    this.token = localStorage.getItem('token')?.replace(/"/g, '') || null;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
    let authReq = req; // Start with the original request

    if (this.token) {
      try {
        authReq = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${this.token}`),
        });
      } catch (error) {
        console.error('Token decryption failed:', error);
      }
    } else {
      // If no token is present, use Basic Auth
      const username = environment.Username;
      const password = environment.Password;
      const basicAuthCredentials = btoa(`${username}:${password}`);
      authReq = req.clone({
        headers: req.headers.set('Authorization', `Basic ${basicAuthCredentials}`),
      });
    }

    // Fallback for default headers (if necessary)
    if (!authReq.headers.has('Authorization')) {
      authReq = authReq.clone({
        headers: authReq.headers.set('Authorization', `Bearer ${environment.base_token}`),
      });
    }

    return next.handle(authReq);
  }
}
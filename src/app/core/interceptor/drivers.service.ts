import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriversService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = req.clone({ headers: req.headers.append('Authorization', 'sid c9f6c7c730cb3dc8e1f841db52cef30e5f856ab3') });
    return next.handle(modifiedRequest);
  }
}

import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }
  
  tokn: string = localStorage.getItem('tokenvalue');
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   // request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});

    /*if (!request.headers.has('Accept')) {
      request = request.clone({headers: request.headers.set('Accept', 'application/json')});
    }*/
if(this.tokn != null)

request = request.clone({headers: request.headers.set('Authorization', this.tokn)});

    return next.handle(request);

  }
}

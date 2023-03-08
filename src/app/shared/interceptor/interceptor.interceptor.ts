import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let token = localStorage.getItem('token')

    if (token) {

      console.log(token)

      let clone = request.clone({
        setHeaders : {
          Authorization : "Bearer " + token
        }
      })

      return next.handle(clone);

    }
    return next.handle(request);
  }
}

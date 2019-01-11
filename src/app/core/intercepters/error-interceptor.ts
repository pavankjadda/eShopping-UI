import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor
{
  constructor(private authService: AuthService, private router: Router)
  {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    return next.handle( request ).pipe( catchError( err =>
    {

      if(err.status===401)
      {
        console.log('Inside ErrorInterceptor, Http Status: 401');
        this.authService.logout();
        this.router.navigate( ['/login'] );
      }
      if(err.status===403)
      {
        console.log('Inside ErrorInterceptor, Http Status: 403');
        this.authService.logout();
        this.router.navigate( ['/login'] );
      }

      if(err.status===404)
      {
        console.log('Inside ErrorInterceptor, Http Status: 404');
        this.authService.logout();
        this.router.navigate( ['/login'] );
      }
      if(err.status===500)
      {
        console.log('Inside ErrorInterceptor, Http Status: 500');
        this.authService.logout();
        this.router.navigate( ['/login'] );
      }




      let error=err.error.message||err.statusText;
      return throwError( error );
    })
    );
  }
}

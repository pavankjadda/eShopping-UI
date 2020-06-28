import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AuthService} from "../auth/auth.service";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let xAuthToken = this.cookieService.get("X-Auth-Token");
    if (xAuthToken) {
      request = request.clone({
        setHeaders: {
          "X-Auth-Token": xAuthToken,
        },
      });
    }
    return next.handle(request);
  }
}

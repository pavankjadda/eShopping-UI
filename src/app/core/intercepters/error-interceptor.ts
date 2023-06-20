import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

/**
 * HTTP Error Interceptor that intercepts all errors from backend
 *
 * @author Pavan Kumar Jadda
 * @since 2.0.0
 */
export function errorInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  const authService = inject(AuthService);
  const router = inject(Router);

  return next(request).pipe(
    catchError((error) => {
      if (error.status === 401) {
        //Save current URL
        if (router.url !== "/login") {
          authService.redirectUrl = router.url;
        }

        //Delete all cookies
        router.navigate(["/login"]);
      } else if (error.status === 403) {
        error.error.message =
          "You are not authorized to access the resource. Please check the URL";
        router.navigate(["/unauthorized"]);
      } else if (error.status === 404) {
        error.error.message =
          error.error.message ??
          "The requested resource is not found. Please try again";
      } else if (
        error.status === 500 ||
        error.status === 502 ||
        error.status === 503 ||
        error.status === 504
      ) {
        error.error.message =
          error.error.message ??
          "Unable to process the request. Please try again";
      } else if (error.status === 0 || error.statusText === "Unknown Error") {
        router.navigate(["/error"]);
      } else {
        error.error.message =
          error.error.message ??
          "Unable to process the request. Please try again";
      }

      return throwError(error.error);
    })
  );
}

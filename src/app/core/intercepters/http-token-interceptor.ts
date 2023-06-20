import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { environment } from "../../../environments/environment";

/**
 * HTTP Token Interceptor that intercepts all requests HTTP requests and adds base URL
 *
 * @author Pavan Kumar Jadda
 * @since 2.0.0
 */
export function httpTokenInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  // Add base URL to all API requests
  if (request.url.indexOf("/api") !== -1) {
    request = request.clone({
      url: environment.BASE_URL + `${request.url}`,
    });
  }
  return next(request);
}

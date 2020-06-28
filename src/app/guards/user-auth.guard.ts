import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,} from "@angular/router";
import {AuthService} from "../core/auth/auth.service";
import {Role} from "../core/role/model/role";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: "root",
})
export class UserAuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(route, state);
  }

  hasUserRole() {
    let userRoles: Array<Role> = JSON.parse(
      this.cookieService.get("currentUser")
    ).roles;
    for (let role of userRoles) {
      if (role.name === "ROLE_USER") {
        return true;
      }
    }
    return false;
  }

  private checkLogin(url: string): boolean {
    if (this.authService.isUserLoggedIn() && this.hasUserRole()) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(["/login"]);
    return false;
  }
}

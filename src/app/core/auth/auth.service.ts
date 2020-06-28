import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../user/model/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {LOGIN_API_URL} from "../../app.constants";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  redirectUrl: string;
  public currentUser: Observable<User>;
  public currentUserSubject: BehaviorSubject<User>;

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  public get currentUserValue(): User {
    return JSON.parse(this.cookieService.get("currentUser"));
  }

  isUserLoggedIn(): boolean {
    return this.cookieService.get("isLoggedIn") === "true";
  }

  // @ts-ignore
  login(username: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        authorization: "Basic " + btoa(username + ":" + password),
      }),
    };
    return this.httpClient
      .get<any>(environment.BASE_URL + LOGIN_API_URL + "/login", httpOptions)
      .pipe(
        map((user) => {
          // login successful if there's a Spring Session token in the response
          if (user && user.token) {
            // store user details and Spring Session token as cookies
            this.cookieService.set("currentUser", JSON.stringify(user));
            this.cookieService.set("X-Auth-Token", user.token);
            this.cookieService.set("isLoggedIn", "true");
          }
          return user;
        })
      );
  }

  logout() {
    this.cookieService.deleteAll();
  }
}

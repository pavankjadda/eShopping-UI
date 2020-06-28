import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegisterUser} from "./register-user";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  registerUser(
    url: string,
    registerUser: RegisterUser,
    httpOptions: { headers: HttpHeaders }
  ) {
    return this.httpClient.post<any>(url, registerUser, httpOptions);
  }
}

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CheckoutService {
  constructor(private httpClient: HttpClient) {}
}

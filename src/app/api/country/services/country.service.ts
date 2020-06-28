import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Country} from "../model/country";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  constructor(private httpClient: HttpClient) {}

  getCountries(url) {
    return this.httpClient.get<Country[]>(url);
  }
}

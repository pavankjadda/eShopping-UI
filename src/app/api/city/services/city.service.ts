import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {City} from "../model/city";

@Injectable({
  providedIn: "root",
})
export class CityService {
  constructor(private httpClient: HttpClient) {}

  getCities(url) {
    return this.httpClient.get<City[]>(url);
  }

  getCitiesByStateId(url: string) {
    return this.httpClient.get<City[]>(url);
  }
}

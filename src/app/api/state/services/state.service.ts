import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {State} from "../model/state";

@Injectable({
  providedIn: "root",
})
export class StateService {
  constructor(private httpClient: HttpClient) {}

  getStates(url) {
    return this.httpClient.get<State[]>(url);
  }

  getStatesByCountryId(url) {
    return this.httpClient.get<State[]>(url);
  }
}

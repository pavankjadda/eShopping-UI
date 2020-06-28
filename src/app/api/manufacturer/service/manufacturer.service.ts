import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Manufacturer} from "../model/manufacturer";

@Injectable({
  providedIn: "root",
})
export class ManufacturerService {
  constructor(private httpClient: HttpClient) {}

  getManufacturer(url: string) {
    return this.httpClient.get<Manufacturer>(url);
  }

  getManufacturers(url: string) {
    return this.httpClient.get<Manufacturer[]>(url);
  }
  createManufacturer(url: string, manufacturer: Manufacturer) {
    return this.httpClient.post<Manufacturer>(url, manufacturer);
  }

  updateManufacturer(url: string, manufacturer: Manufacturer) {
    return this.httpClient.put<Manufacturer>(url, manufacturer);
  }

  deleteManufacturer(url: string) {
    return this.httpClient.delete(url);
  }
}

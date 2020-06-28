import {Component, OnInit} from "@angular/core";
import {environment} from "../../../environments/environment";
import {CITY_API_URL} from "../../app.constants";
import {City} from "./model/city";
import {CityService} from "./services/city.service";

@Component({
  selector: "app-city",
  templateUrl: "./city.component.html",
  styleUrls: ["./city.component.scss"],
})
export class CityComponent implements OnInit {
  cities: Array<City>;
  pageSize: number;
  pageNumber: number;
  totalPages: number;

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.pageNumber = 0;
    this.pageSize = 10;
    this.getCities();
  }

  getCities() {
    const url =
      environment.BASE_URL +
      CITY_API_URL +
      "/list?pageNumber=" +
      this.pageNumber +
      "&pageSize=" +
      this.pageSize;

    this.cityService.getCities(url).subscribe(
      (data) => {
        // @ts-ignore
        this.cities = data.content;
        // @ts-ignore
        this.totalPages = data.totalPages;
      },
      (err) => console.error(err),
      () => console.log("Cities retrieved from backend")
    );
    return this.cities;
  }

  getNextCities() {
    if (this.pageNumber >= this.totalPages) {
      this.pageNumber = this.totalPages;
    } else {
      this.pageNumber++;
    }
    this.getCities();
  }

  getPreviousCities() {
    if (this.pageNumber <= 0) {
      this.pageNumber = 0;
    } else {
      this.pageNumber--;
    }
    this.getCities();
  }

  getFirstPageCities() {
    this.pageNumber = 0;
    this.getCities();
  }

  cityDataAvailable(): boolean {
    return this.cities !== undefined;
  }
}

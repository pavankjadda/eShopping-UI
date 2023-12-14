import { Component, OnInit } from "@angular/core";
import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterLink,
  RouterOutlet,
} from "@angular/router";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { environment } from "../environments/environment.prod";
import { MainComponent } from "./layouts/main/main.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgxSpinnerModule, MainComponent],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
  ) {
    console.log("Is production environment: " + environment.production); // Logs false for default environment
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.spinner.show();
      } else if (event instanceof RouteConfigLoadEnd) {
        this.spinner.hide();
      }
    });
  }
}

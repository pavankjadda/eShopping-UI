import {Component, OnInit} from "@angular/core";
import {RouteConfigLoadEnd, RouteConfigLoadStart, Router,} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {environment} from "../environments/environment.prod";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "Home";

  constructor(private router: Router, private spinner: NgxSpinnerService) {
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
